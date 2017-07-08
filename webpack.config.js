const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = (process.env.NODE_ENV === 'production')

const extractLess = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: !isProd // process.env.NODE_ENV === 'development'
})

function getPlugins() {
  // always add these plugins
  const plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    extractLess
  ]

  // add optimizations if running in production
  if (isProd) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin()
    )
  }

  return plugins
}

function getRules() {
  const rules = [{
    test: /\.js$/,
    use: ['babel-loader'],
    include: path.join(__dirname, 'src')
  },{
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  },{
    test: /\.less$/,
    use: extractLess.extract({
      use: [{
        loader: 'css-loader'
      },{
        loader: 'less-loader'
      }],
      fallback: 'style-loader'
    })
  }]

  return rules
}

const packMan = {
  entry: './src/',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: getPlugins(),

  module: {
    rules: getRules()
  }
}

module.exports = packMan
