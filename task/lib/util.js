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

module.exports = { interleavedToObject, range, sleep };
