module.exports = {
    entry: './main.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    // for some reason its not 'recursive' in a sense
                    // that it also includes previous presets
                    // only 2017 will keep the class syntax
                    presets: ['es2015', 'es2017'],
                    plugins: ['transform-runtime'],
                },
            },
        ],
    },
};
