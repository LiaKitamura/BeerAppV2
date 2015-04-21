angular.module('IHeartBeer').controller('StyleIndexController', ['Beer', 'Style', '$routeParams', '$scope', function(Beer, Style, $routeParams, $scope){

	$scope.style = Style.get({id: $routeParams.styleId});
  	Beer.query($routeParams.styleId, $routeParams.page).success(function(data){
  		$scope.beers = data;	
  	});

}]);
