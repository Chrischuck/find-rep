/* eslint-disable */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  /////////// Sets up entra and output code ////////
  context: __dirname + '/src', // directory webpack looks //
  entry: {
    app: './index.js', // file webpack looks at //
    vendor: [
      'preact',
      'history',
      'node-fetch',
      'preact-redux',
      'redux-thunk'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  /////////// Sets up loaders ////////
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.eot/, loader: 'url-loader?mimetype=application/vnd.ms-fontobject' },
      { test: /\.ttf/, loader: 'url-loader?mimetype=application/x-font-ttf' },
      { test: /\.woff/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2/, loader: 'url-loader?mimetype=application/font-woff2' },
      { test: /\.svg$/, loader: "svg-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.(jpe?g|png)$/i, loaders: [
            'file-loader?hash=sha512&digest=hex',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ] },
      { test: /manifest.json$/, loader: 'file-loader?name=manifest.json!web-app-manifest-loader' },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-0"],
          plugins: [
              ["transform-decorators-legacy"],
              ["transform-runtime"]
            ]
          }
      },
    ]
  },
  ////////// Plug ins! ///////////
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new webpack.LoaderOptionsPlugin({
       minimize: true,
       debug: false
     }),
    new HtmlWebpackPlugin({
      title: 'Bare Minimum',
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
}
