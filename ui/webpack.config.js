module.exports = {
    entry: "./application/main.jsx",
    output: {
        path: __dirname + '/../web/',
        filename: "js/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader?optional=es7.objectRestSpread'
            }
        ]
    }
};