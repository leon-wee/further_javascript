githubUserSearch.controller('GitUserSearchController', ['Search', 'Users', function(Search, Users) {

  var self = this;

  self.doSearch = function() {
    if (self.searchTerm) {
      Search.query(self.searchTerm)
        .then(function(response) {
          console.log(response.data.items[0].url)
          self.searchResult = response.data;
          var responseArray = [];
          for(var i = 0; i < self.searchResult.items.length; i++) {
            var queryURL = self.searchResult.items[i].url;
            Users.repoQuery(queryURL)
              .then(function(response) {
                responseArray.push(response.data);
              })
          }
          self.allUsers = responseArray
        })
    }
  };

}]);
