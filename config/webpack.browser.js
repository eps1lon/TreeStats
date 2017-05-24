const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ip = process.env.IP || '0.0.0.0';
const port = process.env.PORT || 3000;
const DEBUG = process.env.NODE_ENV !== 'production';

const config = {
  devtool: DEBUG ? 'source-map' : false,
  entry: [
    path.join(__dirname, '../src/browser/index.jsx'),
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[hash].bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|src\/tree)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'resolve-url-loader', // resolve relative urls
        }, {
          loader: 'sass-loader?sourceMap', // compiles Sass to CSS
        }],
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
      JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html'),
    }),
  ],
};

if (DEBUG) {
  config.entry.unshift(
    `webpack-dev-server/client?http://${ip}:${port}/`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  );

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]);
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ]);
}

module.exports = config;
