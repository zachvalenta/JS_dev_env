var express = require('express'); // think that Node looks into local node_modules first
var path = require('path');
var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev'

const port = 3000; // in course need Babel to use 'const'
const app = express();
const compiler = webpack(config);

// tell Express to use Webpack set up w/ config from webpack.config
app.use(require('webpack-dev-middleware')(compiler, { // would have thought comma btw 'webpack-dev' and 'compiler'
  noInfo: true, // why are we writing more config here (vs. the actual config file)?
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
