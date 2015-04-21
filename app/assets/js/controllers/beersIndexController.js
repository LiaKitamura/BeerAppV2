angular.module('IHeartBeer').controller('BeersIndexController', ['Beer','$routeParams', '$scope', function(Beer, $routeParams, $scope){

  	$scope.beer = Beer.get({beerId: $routeParams.beerId });

}]);
