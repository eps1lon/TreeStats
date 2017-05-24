import * as fs from 'fs';
import * as path from 'path';

const [dir, out_file]
  = process.argv.slice(2, 4).map((file) => {
    return path.join(process.cwd(), file);
  });

const public_root = process.argv[4];

const ctime = (filename) => +filename.match(/^(\d+)/)[1];

const sources = fs.readdirSync(dir)
  .filter((filename) => {
    return /^.*_get_trees\.csv$/.test(filename);
  })
  .sort((a, b) => ctime(b) - ctime(a))
  .map((filename) => {
    return { filename: path.join(public_root, filename) };
  });

fs.writeFileSync(out_file, JSON.stringify(sources));

console.log(`wrote ${sources.length} sources into '${out_file}'`);
