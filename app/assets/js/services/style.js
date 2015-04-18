angular.module('IHeartBeer')
  .factory('Style', ['$http', '$resource',
    function StyleFactory($http, $resource){
      
      return $resource('/style/:id', { id: "@id" }, {
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
