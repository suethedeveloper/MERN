const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // devtool: "#inline-source-map",
  devServer: {
    publicPath: '/dist/',
    historyApiFallback: true //for route fallback
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets": ["react",["env", {
            "targets": {
              "browsers": "last 2 versions"
            },
            "loose": true,
            "modules": false
          }]]
        }
      }
    ]
  }
}
