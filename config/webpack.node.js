const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');

const script_dir = path.join(__dirname, '../src/scripts');

const scripts = {};
fs.readdirSync(script_dir)
  .filter((filename) => /\.js$/.test(filename))
  .forEach((filename) => scripts[filename] = path.join(script_dir, filename));

const config = {
  devtool: 'inline-source-map',
  externals: [nodeExternals()],
  entry: scripts,
  output: {
    path: path.join(__dirname, '../scripts'),
    filename: '[name]',
    publicPath: './',
  },
  target: 'node',
  node: {
    __filename: false,
    __dirname: false,
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|src\/tree)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
};

module.exports = config;
