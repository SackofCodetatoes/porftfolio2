const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/portfolio.jsx',
  output: {
    path: path.resolve(__dirname, 'frontend'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
    }]
  },
  devtool: 'source-map'
};