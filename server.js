var express = require('express');
var server = express();

// configure server (assets folder, middleware, etc.)
require('./server/expressConfig')(server, express);
require('./server/api/beer')(server);
require('./server/api/category')(server);
require('./server/api/style')(server);

server.get('/', function(req, res){
  res.sendFile('index.html', {root: server.settings.views});
});

// load api endpoints
// require('./server/api.js')(server);

server
	.listen(3000, function(){
		console.log('Server running on 3000. Bottoms up...');
	});
