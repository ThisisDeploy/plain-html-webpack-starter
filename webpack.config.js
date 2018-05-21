const path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

const extractSass = new ExtractTextPlugin({
    filename: "styles.css"
})

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'app.bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'No framework webpack home',
        meta: {
          description: 'Create non-spa pages using webpack - home'
        },
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body',
        googleAnalytics: {
          trackingId: 'UA-XXXXX-Y',
          pageViewOnLoad: false
        }
      }),
      new HtmlWebpackPlugin({
        title: 'No framework webpack about',
        meta: {
          description: 'Create non-spa pages using webpack - about'
        },
        template: 'src/about.html',
        filename: 'about.html',
        inject: 'body',
        googleAnalytics: {
          trackingId: 'UA-XXXXX-Y',
          pageViewOnLoad: false
        }
      }),
      extractSass
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader",
              options: {
                config: {
                  path: 'src/postcss.config.js'
                }
              }
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
          test: /\.(webm|mp4)$/,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
           test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
           loader:'file-loader?name=[path][name].[ext]'
        },
        {
          test: /\.(json|xml)$/,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
              plugins: ['transform-class-properties']
            }
          }
        }
      ]
    }
}
