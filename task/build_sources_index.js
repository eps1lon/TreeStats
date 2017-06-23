const fs = require('fs');
const path = require('path');

const [dir, out_file]
  = process.argv.slice(2, 4).map((file) => {
    return path.join(process.cwd(), file);
  });

const public_root = process.argv[4];

ctime = (filename) => +filename.match(/^(\d+)/)[1];

const sources = {};

fs.readdirSync(dir)
  .filter((filename) => {
    return /^.*_get_trees\.csv$/.test(filename);
  })
  .sort((a, b) => ctime(b) - ctime(a))
  .map((filename) => {
    return [
      ctime(filename),
      { filename: path.join(public_root, filename) },
    ];
  }).forEach((entry) => {
    sources[entry[0]] = entry[1];
  });

fs.writeFileSync(out_file, JSON.stringify(sources));

console.log(`wrote ${Object.keys(sources).length} sources into '${out_file}'`);
