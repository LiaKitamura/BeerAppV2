var brewdb = require('./brewdb');

module.exports = function(app){
  
app
  .get('/beer', function(req, res){
  // Make brewdb call here
    // brewdb.beer

  })

  .get('/beer/:id', function(req, res){
    var beerId = req.params.id;
    // Make brewdb call here
  	brewdb.beer.getById( beerId, function(err, data){
  		if(err) console.log(err); 

  		res.send(data);
  	});

  })

  .get('/beer/style/:styleId/:page?', function(req, res){
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