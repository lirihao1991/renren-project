var webpack = require("webpack");
    path = require("path"),
    nodeModules = path.join(__dirname,"node_modules"),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer');


module.exports = {
    entry: {
        libs:["./src/project/activity/test/js/libs/libs.js"],
        test: ["./src/project/activity/test/js/test.js"]
    },
    output: {
        path: "/Users/rihao-li/workspace/xn.static/static/activity/test",
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.sass$/,
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

        new extractTextPlugin('test.css')
    ],
}