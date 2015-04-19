angular.module('IHeartBeer').controller('StyleIndexController', ['Beer', 'Style', '$routeParams', '$scope', function(Beer, Style, $routeParams, $scope){

	$scope.style = Style.get({id: $routeParams.styleId});
  	$scope.beers = Beer.query({styleId: $routeParams.styleId, page: $routeParams.page });

}]);
