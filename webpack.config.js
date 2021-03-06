const merge = require('webpack-merge')

const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const commonConfig = require('./webpack.common.config.js')

const publicConfig = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.(less|css)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.*']),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      MOCK: false
    })
  ]

}

module.exports = merge(commonConfig, publicConfig)