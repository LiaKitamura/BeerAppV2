angular.module('IHeartBeer').controller('BeersIndexController', ['Beer', '$scope', function(Beer, $scope){

  $scope.beers = Beer.query();

}]);
