'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                entry: './client.js',
                output: {
                    path: './build/dist',
                    publicPath: '/public/dist/',
                    filename: '[name].js',
                    chunkFilename: '[id].js'
                },
                module: {
                    loaders: [{
                        test: /\.less$/,
                        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
                    }, {
                        test: /\.(svg|ttf|eot|woff|woff2)$/,
                        loader: 'file-loader'
                    }, {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: require.resolve('babel-loader')
                    }, {
                        test: /\.json$/,
                        loader: 'json-loader'
                    }]
                },
                plugins: [
                    new ExtractTextPlugin('[name].css')
                ],
                stats: {
                    colors: true
                },
                debug: true,
                devtool: 'source-map',
                watch: true,
                keepalive: true
            };
