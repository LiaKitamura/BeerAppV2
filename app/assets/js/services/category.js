angular.module('IHeartBeer')
  .factory('Category', ['$http', '$resource',
    function CategoryFactory($http, $resource){
      
      return $resource('/category/:id', { id: "@id" }, {
        update: {
          method: "PUT"
        }
      });

      // return {
      //   query: function(){
      //     return $http.get('/category')
      //       .success(function(data){
      //         console.log('got cats');
      //         console.log(data);
      //         return data;
      //       })
      //       .error(function(data){
      //         console.log('err cats');

      //         return data;
      //       });
      //   },
      //   get: function(id){
      //     return $http.get('/category/'+id);
      //   }
      // }

    }]);
