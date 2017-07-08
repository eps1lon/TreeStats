const { Readable } = require('stream');

const streamify = (items) => {
  const stream = new Readable();
  items.forEach((item) => stream.push(item));
  stream.push(null);
  return stream;
};

module.exports = streamify;
