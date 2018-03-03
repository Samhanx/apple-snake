const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new HtmlPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new ExtractPlugin({
      filename: 'main.[hash].css'
    })
  ]
}