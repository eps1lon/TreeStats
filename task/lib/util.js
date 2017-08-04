const fs = require('fs');
const { promisify } = require('util');

const unlink = promisify(fs.unlink);

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

const sleep = (n) =>
  new Promise((resolve) => setTimeout(() => resolve(), n));

const range = (n, m) => Array(m - n + 1).fill(0).map((_, i) => n + i);

const copy = (src, dest) => {
  return new Promise((resolve) => {
    fs
      .createReadStream(src).pipe(fs.createWriteStream(dest))
      .on('end', () => {
        resolve();
      })
      .on('finish', () => {
        resolve();
      })
      .on('error', (err) => {
        console.warn(err);
        reject(err);
      });
  });
};

const move = async (src, dest) => {
  await copy(src, dest);
  await unlink(src);
};

module.exports = { copy, interleavedToObject, move, range, sleep };
