const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/assets/js/script.js', './src/assets/js/carrinho.js'],
    registro: './src/assets/js/registro.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/assets/js')
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map'
};
