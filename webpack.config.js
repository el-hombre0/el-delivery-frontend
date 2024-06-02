// const path = require('path')

// module.exports = {
//     entry: {
//         main: path.resolve(__dirname, './src/index.tsx'),
//     },
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: '[name].bundle.js',
//     },
// }

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  target: 'web',
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],

};

// import path from 'path';
// import webpack from 'webpack';
// import 'webpack-dev-server';

// const config: webpack.Configuration = {
//     entry: './src/index.tsx',
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'index.bundle.js',
//     },
//     mode: 'development'
// };

// export default config;
///////////////////////////////////////
// const webpack = require('webpack');
// const path = require('path');
// const production = process.env.NODE_ENV === 'production';

// module.exports = {
//     entry: {
//         myAppName: path.resolve(__dirname, "./src/index.tsx")
//     },
//     output: {
//         path: path.resolve(__dirname, "./dist"),
//         filename: production ? '[name].[contenthash].js' : '[name].js',
//     },
//     module: {
//         rules: [

//         ]
//     }
// }
