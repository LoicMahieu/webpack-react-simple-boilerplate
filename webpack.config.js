
var path = require('path')

module.exports = {
  context: path.join(__dirname, '/src'),
	entry: './main.js',
  module: {
      loaders: [
          {
              test:   /\.css$/,
              loader: "style-loader!css-loader?sourceMap!postcss-loader"
          }
      ]
  },
  postcss: function () {
      return [
        require('autoprefixer'),
        require('postcss-nested')
      ];
  }
}
