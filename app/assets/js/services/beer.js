angular.module('IHeartBeer')
  // .factory('Note', ['$http', function NoteFactory($http){
  .factory('Beer', ['$http',
    function BeerFactory($http){
      return {
        query: function(styleId, page){ // Note.all
          return $http.get("/beer/style/"+styleId+"/"+page);
        },
        get: function(id){ // Note.get(note.id)
          return $http.get("/beer/"+id);
        }
      }

      // $resource encapsulates ALL of these methods
      // {
      //   query: function(){ // Note.all
      //     return $http({ method: "GET", url: "/notes/" });
      //   },
      //   get: function(id){ // Note.get(note.id)
      //     return $http({ method: 'GET', url: "/notes/"+id });
      //   },
      //   save: function(note){
      //     return $http({ method: 'POST', url: "/notes/", data: note });
      //   },,
      //   remove: function(id){
      //     return $http({ method: 'DELETE', url: "/notes/"+id });
      //   }
      //   delete: function(id){
      //     return $http({ method: 'DELETE', url: "/notes/"+id });
      //   }

        //   // NOT INCLUDED BY DEFAULT right now the PUT method is not universally accepted and will break on IE
        //   update: function(note){
        //     return $http({ method: 'PUT', url: "/notes/"+note.id, data: note });
        //   }
      // }

    }]);
