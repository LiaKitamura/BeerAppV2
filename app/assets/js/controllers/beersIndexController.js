angular.module('IHeartBeer').controller('BeersIndexController', ['Beer','$routeParams', '$scope', function(Beer, $routeParams, $scope){

  	$scope.beers = Beer.query({styleId: $routeParams.styleId, page: $routeParams.page });

}]);
