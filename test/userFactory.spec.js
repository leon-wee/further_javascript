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
      .whenGET("http://api.github.com/users/tansaku?access_token=" + accessToken )
      .respond(
        { items: items }
      );
  }));

  var items = [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku",
        "followers": "197",
        "public_repos": "238"
      },
    ];

  it('responds to repoQuery', function() {
    expect(users.repoQuery).toBeDefined();
  });

  it('returns search results', function() {
    users.repoQuery('http://api.github.com/users/tansaku')
      .then(function(response) {
        expect(response.data.items).toEqual(items)
      })
    httpBackend.flush();
  });
//
});