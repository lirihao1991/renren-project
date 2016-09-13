var webpack = require("webpack");
    path = require("path"),
    nodeModules = path.join(__dirname,"node_modules"),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        libs:["./src/project/activity/starcollege/js/libs/libs.js"],
        starcollege:["./src/project/activity/starcollege/js/starcollege.js"],
		mytmp:["./src/project/activity/starcollege/js/mytmp.js"],

    },
    output: {
        path: "D:/workspace/svn/xn.static/wap/static/activity/starcollege",
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: extractTextPlugin.extract('style', 'css!postcss!sass')
            },
            {
                test: /.(png|jpg)$/,
                loader: 'url-loader?limit=204800'
            },
            {
              test: /\.(woff2?|otf|eot|svg|ttf)$/i,
              loader: 'url?name=fonts/[name].[ext]'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },

    resolve : {
        alias : {
            "zepto"    : path.join(__dirname,"src/zepto"),
            "flexible" : path.join(__dirname,"src/flexible"),
        }
    },

    plugins: [
        new extractTextPlugin('[name].css')
    ],
}
