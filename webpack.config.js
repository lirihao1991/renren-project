var webpack = require("webpack");
    path = require("path"),
    nodeModules = path.join(__dirname,"node_modules"),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        libs:["./src/project/h5/h5/js/libs/libs.js"],
        h5: ["./src/project/h5/h5/js/h5.js"],

    },
    output: {
        path: "/Users/rihao-li/workspace/xn.static/static/h5/h5",
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                h5: /\.scss$/,
                loader: extractTextPlugin.extract('style', 'css!postcss!sass')
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "libs",
            filename: "libs.js",
            minChunks: Infinity
        }),

        new extractTextPlugin('h5.css')
    ],
}