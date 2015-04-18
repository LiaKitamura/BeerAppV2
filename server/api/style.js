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
		});

};