describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:9292');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.allUsers'));
    expect(element(by.className('searched_for')).getText()).toEqual('Search results for spike01');
    expect(profiles.getText()).toEqual(['spike01 100'])
  });

  it('can count the number of leon-wee', function() {
    searchBox.sendKeys('leon-wee');
    searchButton.click();
    var profile = element.all(by.repeater('user in searchCtrl.allUsers'));
    expect(element(by.className('searched_for')).getText()).toEqual('Search results for leon-wee')
    profile.then(function(items) {
      expect(items.length).toEqual(1)
    });
  });


});
