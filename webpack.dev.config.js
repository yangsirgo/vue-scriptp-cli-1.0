const config = require('./webpack.config');
config.mode = 'development';
config.devtool = 'source-map';
module.exports = config;
