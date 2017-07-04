const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractLess = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  entry: './src/',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    extractLess
  ],

  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
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
  },

  devServer: {
    contentBase: './dist',
    hot: true
  }
}
