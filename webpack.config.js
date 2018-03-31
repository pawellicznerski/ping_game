const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.js',
  },
  // devServer: {
  //     // inline: true,
  //     contentBase: './dist',
  //     port: 3080,
  //     // compress: true,
  //     hot:true
  // },
  watch:true,
  mode: 'development',
    module:{
      rules:[
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [require('@babel/plugin-proposal-object-rest-spread')]
            }
          }
        },
        {
          test:/\.css$/,
          use:['style-loader','css-loader']
        },
        {
          test:/\.scss$/,
          use:['style-loader','css-loader','sass-loader']
        }
      ]
    },
    // plugins: [
    //   new CleanWebpackPlugin(['dist']),
    //   new HtmlWebpackPlugin({
    //     title: 'Hot Module Replacement',
    //     hash: true,
    //     filename: './index.html'
    //   }),
    //   new webpack.NamedModulesPlugin(),
    //   new webpack.HotModuleReplacementPlugin()
    // ]
};
