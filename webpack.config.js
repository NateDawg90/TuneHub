var path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: "./frontend/main.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  watch: true,
  // plugins: [
  //   new BrowserSyncPlugin({
  //     // browse to http://localhost:3000/ during development,
  //     // ./public directory is being served
  //     host: 'localhost',
  //     port: 3000,
  //     server: { baseDir: [path.join(__dirname, 'app', 'assets', 'javascripts')] }
  //   })
  // ],
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
