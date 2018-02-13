import path from 'path';
// need to import here (vs. .dev) bc using webpack plugins like Uglify
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/* these comments specific to .prod file
for full comments see .dev file */

export default {
  debug: true,
  devtool: 'source-map', // 'source-map' more verbose than 'inline-source-map'
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    // idky 'dist' generates actual file on disk and .dev generates virtual file in memory
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(), // minify JS
    new webpack.optimize.DedupePlugin(), // rm duplicate pkg
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true, // says "Webpack, take whatever JS you generate and put reference"
    }),
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
