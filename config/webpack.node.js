const path = require('path');
const fs = require('fs');

const script_dir = path.join(__dirname, '../src/scripts');

const scripts = {};
fs.readdirSync(script_dir)
  .filter((filename) => /\.js$/.test(filename))
  .forEach((filename) => scripts[filename] = path.join(script_dir, filename));

const config = {
  devtool: 'inline-source-map',
  entry: scripts,
  output: {
    path: path.join(__dirname, '../scripts'),
    filename: '[name]',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|src\/tree)/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
