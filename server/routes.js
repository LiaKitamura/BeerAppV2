var express = require('express');
var app = express();

// Load Express Configuration
require('./expressConfig')(app, express);

// Root route
app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});

// API Load routes
require('./api/user')(app); //user api
require('./api/beer')(app); // note api
require('./api/category')(app); // category api
require('./api/style')(app); // category api

module.exports = app;
