angular.module('IHeartBeer').controller('BeerIndexController', ['Beer','$routeParams', '$scope', function(Beer, $routeParams, $scope){
	console.log($routeParams);
  	Beer.get($routeParams.beerId).success(function(data){
  		$scope.beer = data;	
  	});

}]);
