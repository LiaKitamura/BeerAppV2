(function(){

  angular.module('IHeartBeer', ['ngRoute', 'ngResource'])
    .config(function($routeProvider){
      $routeProvider
        .when('/beer/:styleId/:page', {
          templateUrl: '/assets/templates/pages/beers/index.html',
          controller: 'BeersIndexController',
        })
        .when('/beer/:styleId/', {
          templateUrl: '/assets/templates/pages/beers/index.html',
          controller: 'BeersIndexController',
        })
      
    });

})();
