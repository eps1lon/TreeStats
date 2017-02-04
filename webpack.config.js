const webpack = require('webpack');

module.exports = {
    entry: './src/browser/index.jsx',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'react-bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|src\/tree)/,
                loader: 'babel-loader',
                query: {
                    // for some reason its not 'recursive' in a sense
                    // that it also includes previous presets
                    // 2017 only will keep the class syntax
                    presets: ['react', 'es2015', 'es2017'],
                    plugins: [
                        'transform-runtime',
                        'transform-object-rest-spread',
                        'transform-class-properties',
                    ],
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':
                JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
};
