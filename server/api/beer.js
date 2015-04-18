var BreweryDb = require('brewerydb-node'); 
var brewdb = new BreweryDb('3c5b60e0236d76112a44f5f381eb38f7');

module.exports = function(app){
  
  app.get('/beers', function(req, res){
  // Make brewdb call here
    

  });

  app.get('/beers/:id', function(req, res){
    var beerId = parseInt(req.params.id, 10);
    // Make brewdb call here
   

  });
};