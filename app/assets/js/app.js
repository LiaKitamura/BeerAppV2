(function(){

  angular.module('IHeartBeer', ['ngRoute', 'ngResource'])
    .config(function($routeProvider){
      $routeProvider
        .when('/beers', {
          templateUrl: '/assets/templates/pages/beers/index.html',
          controller: 'BeersIndexController',
        })
    });

})();
