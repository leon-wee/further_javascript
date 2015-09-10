githubUserSearch.factory('Users', ['$http', function($http) {

  return {
    repoQuery: function(queryURL) {
      return $http({
        url: queryURL,
        method: 'GET'
      });
    }
  }

}]);