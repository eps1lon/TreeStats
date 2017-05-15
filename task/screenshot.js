const CDP = require('chrome-remote-interface');
const fs = require('fs');
const path = require('path');

const viewportWidth = 1920;
const viewportHeight = 1080;
const out_file = 'index.png';

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

const dispatchClick = (client, options) => Promise.resolve()
  .then(() => client.Input.dispatchMouseEvent(Object.assign({},
    options,
    { type: 'mousePressed' }
  )))
  .then(() => client.Input.dispatchMouseEvent(Object.assign({},
    options,
    { type: 'mouseReleased' }
  )));

const clickNode = async (DOM, selector) => {
  const node = await querySelector(DOM, selector);
  const model = await DOM.getBoxModel({ nodeId: node.nodeId });

  // TODO: there is no get position, just get node at position
};

const navigateToSources = async (client) => {
  await clickNode(client.DOM, 'ul.nav-tabs li:nth-of-type(1)');
  await dispatchClick(client, {
    x: 60,
    y: 30,
    button: 'left',
    clickCount: 1,
  });

  // TODO: use url navigation an provide routing in app
};

CDP(async (client) => {
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

    await Page.navigate({ url: 'http://localhost:3000' });
    await Page.domContentEventFired();

    await sleep(20); // waitfor init action
    await headmapLoaded(DOM);

    await navigateToSources(client);

    const { data } = await Page.captureScreenshot();
    fs.writeFileSync(
      path.join(__dirname, 'screenshot', out_file),
      Buffer.from(data, 'base64')
    );
  } catch (err) {
    console.error(err);
  }
  await client.close();
}).on('error', (err) => {
  console.error(err);
});
