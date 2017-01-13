var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'target'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    // new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
       {
        test: /\.jsx?$/,
        loaders: [],
        include: path.join(__dirname, 'src')
       },
       {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'react', 'stage-0']
        }
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
