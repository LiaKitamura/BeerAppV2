angular.module('IHeartBeer')
  .directive('beerCategory', function(){
    return {
      restrict: "E",
      templateUrl: "/assets/templates/directives/beerCategory.html",
      controller: function($scope, $location){
        $scope.isPage = function(name){
          return new RegExp( name ).test( $location.path() );
          //  regex starts and ends with /
          //  / \/notes ($|/)/ /
        };
      }
    }
  });