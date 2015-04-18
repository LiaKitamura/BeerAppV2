angular.module('IHeartBeer')
  .factory('Category', ['$http',
    function CategoryFactory($http){
      return {
        query: function(){
          return $http.get('/category');
        },
        get: function(id){
          return $http.get('/category/'+id);
        }
      }

    }]);
