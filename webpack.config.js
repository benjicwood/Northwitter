const path = require('path');
const validate = require('webpack-validator');

const PATH = {
  ENTRY: path.join(__dirname, 'src', 'index.js'),
  BUNDLE: path.join(__dirname, 'public', 'js')
};

module.exports = validate({
  entry: PATH.ENTRY,
  output: {
    path: PATH.BUNDLE,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
});
