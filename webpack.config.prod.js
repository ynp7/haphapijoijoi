const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['./src/'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
}
