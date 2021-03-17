const path = require('path')

module.exports = {
  mode: 'development',
  entry: "./app.js",
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, ''),
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude:/(node_modules|bower_components)/,
        loader: 'babel-loader',
      }
    ]
  }
};