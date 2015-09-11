describe('factory:Users', function() {
  var users;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Users) {
    users = Users;
  }));

  var httpBackend;
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .whenGET("https://api.github.com/search/users?q=hello")
      .respond(
        { items: items }
      );
  }));

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    }
  ];

  it('responds to repoQuery', function() {
    expect(users.repoQuery).toBeDefined();
  });

});