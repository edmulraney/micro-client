const path = require('path')

module.exports = {
  entry: './packages/node_modules/host/src/index.js',
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, 'packages/node_modules/host/dist')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [
        path.resolve(__dirname, 'packages/node_modules')
      ],
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  }
}