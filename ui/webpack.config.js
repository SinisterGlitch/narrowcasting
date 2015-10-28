module.exports = {
    entry: './application/main.jsx',
    output: {
        path: __dirname + '/../web/',
        filename: 'js/app.js',
        devtoolModuleFilenameTemplate: '../ui/[resource-path]'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'application'],
        extensions: ['', '.js', '.jsx']
    }
};