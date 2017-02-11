var path = require('path');

module.exports = {

  entry: {
   hoverzoom:  './hover-zoom'
  },

  output: {
    path: path.join(__dirname, 'build/js'),
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: function (filename) {
        if (filename.indexOf('node_modules') !== -1) {
          return false;
        } else {
          return /\.js$/.test(filename) !== -1;
        }
      },
      loaders: ['babel-loader']
    }]
  },

  resolve: {
    modulesDirectories: [path.join(__dirname, 'src'), 'node_modules']
  }

};