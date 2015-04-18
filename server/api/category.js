var brewdb = require('./brewdb');

module.exports = function(app){
  
  app.get('/category', function(req, res){
  // Make brewdb call here
    brewdb.category.all(function(err, data){
    	if(err) console.log(err);
    	res.send(data);
    });

  });

  app.get('/category/:id', function(req, res){
    var catId = parseInt(req.params.id, 10);
    // Make brewdb call here
	brewdb.category.getById(catId, function(err, data){
		res.send(data);
	});   

  });
};