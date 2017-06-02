var path = require('path');
var webpack = require('webpack');

module.exports = { // node js program
     entry: './js/app.js', // entry point
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js' // ouput folder
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'es2017'] // features of babel to be used
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map' //gives source, helps in debug
 };