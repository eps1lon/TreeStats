const cdp = require('chrome-remote-interface');
const fs = require('fs');
const path = require('path');
const request = require('request');

const { interleavedToObject, range, sleep } = require('./lib/util');

// config
const viewportWidth = 1920;
const viewportHeight = 1600;
const HEADLESS_PORT = 9222;
// eslint still throws
// eslint-disable-next-line: max-len
const HEADLESS_COMMAND = `google-chrome --headless --hide-scrollbars --remote-debugging-port=${HEADLESS_PORT} --disable-gpu &`;

const USAGE = `${path.basename(process.argv[1])} {prefix} {league} {sources} {host} [{blacklist}]`;

if (process.argv.length < 5) {
  console.log(USAGE);
  return;
}

const [
  prefix, league, sources_arg, host, blacklist_file,
] = process.argv.slice(2);

let sources_promise = Promise.resolve([]);
if (/\d+\.\.\d+/.test(sources_arg)) {
  sources_promise = Promise.resolve(
    range(...sources_arg.split('..').map((n) => +n))
  );
} else if (/.*\.json$/.test(sources_arg)) {
  sources_promise = new Promise((resolve, reject) => {
    request(`${host}/${sources_arg}`, (e, response, body) => {
      if (e) {
        reject(e);
      } else {
        resolve( Object.keys(JSON.parse(body)));
      }
    });
  });
} else {
  sources_promise = Promise.resolve(sources_arg.split(',').map((n) => +n));
}

let source_blacklist = new Set();
if (blacklist_file !== undefined) {
  // init, create empty
  if (!fs.existsSync(blacklist_file)) {
    fs.writeFileSync(blacklist_file, '');
  }

  source_blacklist = new Set(
    fs.readFileSync(blacklist_file).toString()
      .split(',')
      .filter((s) => s.length > 0)
  );
}

const classNames = async (DOM, node_id) => {
  const attributes = interleavedToObject(
    (await DOM.getAttributes({ nodeId: node_id })).attributes
  );
  const klass = attributes['class'];

  if (typeof klass === 'string') {
    return klass.split(' ');
  } else {
    return [];
  }
};

const hasClass = async (DOM, node_id, class_name) => {
  const class_names = await classNames(DOM, node_id);
  return class_names.indexOf(class_name) !== -1;
};

const querySelector = async (DOM, selector) => {
  const { root: { nodeId: documentNodeId } } = await DOM.getDocument();
  return await DOM.querySelector({
    selector,
    nodeId: documentNodeId,
  });
};

const appIsLoading = async (DOM) => {
  const { nodeId: htmlNodeId } = await querySelector(DOM, 'html');

  return await hasClass(DOM, htmlNodeId, 'nprogress-busy');
};

const headmapLoaded = async (DOM) => {
  // sleep until appIsLoading === false
  while (await appIsLoading(DOM)) {
    // await sleep(20);
    await DOM.attributeModified();
  }
};

const screenshot = async (
  Page, DOM, out_prefix, league = 'all', source_key = '0',
) => {
  const url = `${host}league/${league}/?clean&source=${source_key}`;

  await Page.navigate({ url });
  await Page.domContentEventFired();

  await sleep(20); // waitfor init action
  await headmapLoaded(DOM);

  const { data } = await Page.captureScreenshot();
  fs.writeFileSync(
    path.join(
      __dirname,
      'screenshot',
      [out_prefix, source_key, league].join('-') + '.png'
    ),
    Buffer.from(data, 'base64')
  );
};

cdp(async (client) => {
  const { Emulation, Page, DOM } = client;
  try {
    await Page.enable();
    await DOM.enable();

    // Set up viewport resolution, etc.
    const deviceMetrics = {
      width: viewportWidth,
      height: viewportHeight,
      deviceScaleFactor: 0,
      mobile: false,
      fitWindow: false,
    };
    await Emulation.setDeviceMetricsOverride(deviceMetrics);
    await Emulation.setVisibleSize({
      width: viewportWidth,
      height: viewportHeight,
    });

    const sources = await sources_promise;

    for (const source_key of sources) {
      if (!source_blacklist.has(source_key)) {
        await screenshot(Page, DOM, prefix, league, source_key);
        console.log('shot taken of', source_key);

        source_blacklist.add(source_key);
        if (blacklist_file !== undefined) {
          fs.writeFileSync(
            blacklist_file,
            [...source_blacklist.values()].join(',')
          );
        }
      } else {
        console.log('skipped', source_key);
      }
    }
  } catch (err) {
    console.error(err);
  }
  await client.close();
}).on('error', (err) => {
  console.log(
    `you may not have started chrome in headless \nrun ${HEADLESS_COMMAND}`
  );
});
