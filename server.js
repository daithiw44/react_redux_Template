let path = require('path');
let express = require('express');
let config = require ('./config.json');
let webpack = require('webpack');
let webpackconfig = require('./webpack.config');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

let app = express();
let compiler = webpack(webpackconfig);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath:webpackconfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./client/dist'));

app.use('/', (req, res) => {
  res.sendFile(path.resolve('client/index.html'));
});

app.listen(config.port || 3000,function(err){
  if(err) throw error;
}); 
