module.exports = {
  entry: "./frontend/portfolio.jsx",
  output: {
    filename: "./frontend/bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    extentsions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
    }]
  }
};