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
    new webpack.NamedModulesPlugin(),
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
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    )
  }

  return plugins
}

function getRules() {
  const rules = [{
    test: /\.js$/,
    use: ['react-hot-loader/webpack', 'babel-loader'],
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

const config = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: getPlugins(),

  module: {
    rules: getRules()
  },

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}

// console.log(JSON.stringify(packMan.plugins,null,2))

module.exports = config
