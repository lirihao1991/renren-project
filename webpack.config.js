var webpack = require("webpack");
    path = require("path"),
    nodeModules = path.join(__dirname,"node_modules"),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        libs:["./src/project/h5/mytest/js/libs/libs.js"],
        mytest: ["./src/project/h5/mytest/js/mytest.js"],

    },
    output: {
        path: "/Users/rihao-li/workspace/xn.static/static/h5/mytest",
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                mytest: /\.scss$/,
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

        new extractTextPlugin('mytest.css')
    ],
}