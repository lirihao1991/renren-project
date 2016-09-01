var webpack = require("webpack");
    path = require("path"),
    nodeModules = path.join(__dirname,"node_modules"),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        libs:["./src/project/h5/test/js/libs/libs.js"],
        test: ["./src/project/h5/test/js/test.js"],

    },
    output: {
        path: "/Users/rihao-li/workspace/xn.static/static/h5/test",
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: extractTextPlugin.extract('style', 'css!postcss!sass')
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },

    plugins: [
        new extractTextPlugin('test.css')
    ],

    resolve : {
        alias : {
            "jquery" : path.join(nodeModules,"/jquery/dist/jquery"),
            // "jquery" : path.join(nodeModules,"/jquery/dist/jquery.min"),
            "react"  : path.join(nodeModules,"/react/dist/react"),
            // "react"  : path.join(nodeModules,"/react/dist/react.min"),
            "react-dom" : path.join(nodeModules,"/react-dom/dist/react-dom"),
            "highcharts": path.join(nodeModules,"/highcharts/highcharts")
        }
    }
}