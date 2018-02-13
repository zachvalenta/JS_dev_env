import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default { // exports this god obj
  debug: true, // debug info on run
  devtool: 'inline-source-map', // tradeoff: speed vs. ?
  noInfo: false, // display list of all files bundled
  entry: [
    path.resolve(__dirname, 'src/index') // guess Webpack just assumes this is .js file
  ],
  target: 'web', // 'node' another option here
  output: {
    path: path.resolve(__dirname, 'src'), // won't actually generate output, will serve from memory, simulate existence on disk
    publicPath: '/',
    filename: 'bundle.js' // filename of output that we *don't* generate; ??
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true, // says "Webpack, take whatever JS you generate and put reference"
    })
  ],
  module: {
    loaders: [ // how to handle different file types
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}, // ? --> if webpack knows to use Babel, why necessary to add babel-node for NPM start script?
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
