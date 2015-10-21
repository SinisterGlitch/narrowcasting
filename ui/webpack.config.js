var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    plugins: [
        new CompressionPlugin({
            asset: "{file}.gz",
            algorithm: "gzip",
            regExp: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    entry: "./application/main.jsx",
    output: {
        path: __dirname + '/../web/',
        filename: "js/app.js",
        devtoolModuleFilenameTemplate: '../ui/[resource-path]'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:  /(node_modules|bower_components|generated)/,
                loaders: ['babel-loader?optional=es7.objectRestSpread']
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'application', 'generated'],
        extensions: ['', '.js', '.jsx']
    }
};