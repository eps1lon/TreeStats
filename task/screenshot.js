const cdp = require('chrome-remote-interface');
const fs = require('fs');
const path = require('path');

// config
const viewportWidth = 1920;
const viewportHeight = 1080;
const HEADLESS_PORT = 9222;
// eslint still throws
// eslint-disable-next-line: max-len
const HEADLESS_COMMAND = `google-chrome --headless --hide-scrollbars --remote-debugging-port=${HEADLESS_PORT} --disable-gpu &`;

const USAGE = `${path.basename(process.argv[1])} {prefix} {league} {sources}`;

if (process.argv.length < 4) {
  console.log(USAGE);
  return;
}

const range = (n, m) => Array(m - n + 1).fill(0).map((_, i) => n + i);

const [prefix, league, sources_arg] = process.argv.slice(2);
let sources = [];
if (/\d+\.\.\d+/.test(sources_arg)) {
  sources = range(...sources_arg.split('..').map((n) => +n));
} else {
  sources = sources_arg.split(',').map((n) => +n);
}

const sleep = (n) => new Promise((resolve) => setTimeout(() => resolve(), n));

const interleavedToObject = (array) => {
  if (array.length % 2) {
    throw new Error('only interleaved when |array| % 2 == 0');
  }

  const parsed = {};
  for (let i = 0; i < array.length; i += 2) {
    parsed[array[i]] = array[i+1];
  }

  return parsed;
};

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

const headmapLoaded = (DOM) => new Promise(async (resolve) => {
  while (await appIsLoading(DOM)) {
    // await sleep(20);
    await DOM.attributeModified();
  }
  resolve();
});

const screenshot = async (
  Page, DOM, out_prefix, league = 'all', source = '0'
) => {
  const url = `http://localhost:3000/league/${league}/?clean&source=${source}`;

  await Page.navigate({ url });
  await Page.domContentEventFired();

  await sleep(20); // waitfor init action
  await headmapLoaded(DOM);

  const { data } = await Page.captureScreenshot();
  fs.writeFileSync(
    path.join(
      __dirname,
      'screenshot',
      [out_prefix, source, league].join('-') + '.png'
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

    for (const source of sources) {
      await screenshot(Page, DOM, prefix, league, source);
      console.log('shot taken of', source);
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
