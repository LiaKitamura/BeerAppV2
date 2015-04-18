var brewdb = require('./brewdb');

module.exports = function(app){
  
app
  .get('/beers', function(req, res){
  // Make brewdb call here
    // brewdb.beer

  })

  .get('/beers/:id', function(req, res){
    var beerId = req.params.id;
    // Make brewdb call here
  	brewdb.beer.getById( beerId, function(err, data){
  		if(err) console.log(err); 

  		res.send(data);
  	});

  })

  .get('/beers/rand', function(req, res){
  	brewdb.beer.find({order: random, randomCount: 2 }, function(err, data){
  		if(err) console.log(err); 

  		res.send(data);
  	});
  })

};