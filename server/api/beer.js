var brewdb = require('./brewdb');

module.exports = function(app){
  
app

  .get('/beer/:id', function(req, res){
    var id = req.params.id;
    
  	brewdb.beer.getById( id, {}, function(err, data){
  		if(err) console.log(err); 

  		res.send(data);
  	});

  })

  .get('/beer/style/:styleId/:page?', function(req, res){
    var page = req.params.page || 1;

    brewdb.beer.find({styleId: req.params.styleId, p: page}, function(err, data){
        res.send(data);
      });
      
    })


};