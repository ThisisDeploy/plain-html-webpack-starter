const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.config.js')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const CompressionPlugin = require('compression-webpack-plugin');

let productionConfig = merge(config, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 80,
          progressive: true
        })
      ]
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
})


module.exports = productionConfig
