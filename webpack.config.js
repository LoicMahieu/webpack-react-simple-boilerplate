
var path = require('path')
var fs = require('fs')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname, '/src'),
  entry: './main.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?sourceMap'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    }]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  postcss: function () {
    return [
      require('postcss-import'),
      require('autoprefixer'),
      require('postcss-nested'),
      function (css) {
        css.prepend(fs.readFileSync('./src/styles/variables.css').toString('utf8'))
      },
      require('postcss-simple-vars')
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}
