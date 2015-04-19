var brewdb = require('./brewdb');

module.exports = function(app){

	app
		.get('/style', function(req, res){
			brewdb.style.all(function(err, data){
				res.send(data);
			});
		})

		.get('/style/:id', function(req, res){
			brewdb.style.getById(req.params.id, function(err, data){
				res.send(data);
			})
		})

		.get('/style/:styleId/:page?', function(req, res){
			var page = req.params.page || 1;
			// var query = "styleId="+req.params.styleId+"&p="+page
			// ;
			// request('http://api.brewerydb.com/v2/beers?key=3c5b60e0236d76112a44f5f381eb38f7&'+query, function (error, response, body) {
			//   if (!error && response.statusCode == 200) {
			//     res.send(body);
			//   }
			// });

			brewdb.beer.find({styleId: req.params.styleId, p: page}, function(err, data){
				res.send(data);
			});

		})

};