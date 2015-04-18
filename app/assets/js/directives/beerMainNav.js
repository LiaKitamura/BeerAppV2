angular.module('IHeartBeer')
  .directive('beerMainNav', function(){
    return {
      restrict: "E",
      templateUrl: "/assets/templates/directives/beerMainNav.html",
      controller: function($scope, $location){
        $scope.isPage = function(name){
          return new RegExp( name ).test( $location.path() );
          //  regex starts and ends with /
          //  / \/notes ($|/)/ /
        };
      }
    }
  });