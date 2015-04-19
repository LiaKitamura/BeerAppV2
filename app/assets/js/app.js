(function(){

  angular.module('IHeartBeer', ['ngRoute', 'ngResource'])
    .config(function($routeProvider){
      $routeProvider
       
        .when('/style/:styleId/:page', {
          templateUrl: '/assets/templates/pages/style.html',
          controller: 'StyleIndexController',
        })
        
        .when('/style/:styleId/', {
          templateUrl: '/assets/templates/pages/style.html',
          controller: 'StyleIndexController',
        })
      
    });

})();
