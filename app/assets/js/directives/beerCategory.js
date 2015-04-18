angular.module('IHeartBeer')
  .directive('beerCategory', ['Category', 'Style', function(Category, Style){
    return {
      restrict: "E",
      templateUrl: "/assets/templates/directives/beerCategory.html",
      controller: function($scope, $location){
        $scope.isPage = function(name){
          return new RegExp( name ).test( $location.path() );
          //  regex starts and ends with /
          //  / \/notes ($|/)/ /
        };
      $scope.categories = Category.query();
      $scope.styles = Style.query();
      }
    }
  }]);
