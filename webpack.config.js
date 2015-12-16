
var path = require('path')
var fs = require('fs')

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: './main.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?sourceMap!postcss-loader'
    }]
  },
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
  }
}
