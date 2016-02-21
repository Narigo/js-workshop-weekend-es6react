var assert = require('assert');
var fetch = require('node-fetch');

describe('test setup', () => {

  it('works', () => {
    assert(true);
  });

});

var KATAS_URL = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';
var WRONG_URL = 'http://wrong.url.test/katas.json';
var INVALID_URL = 'http://katas.tddbin.com/katas/es6/language/__all__.json';
// 1) load it correctly
// 2) load a wrong URL
// 3) load wrong structured file

function loadKatasJsonFrom(url) {
  return fetch(url)
    .then(function (res) {
      return res.json();
    });
}

describe('loading the katas JSON', () => {

  it('works', () => {
    return loadKatasJsonFrom(KATAS_URL)
      .then(function (katasJson) {
        assert('groups' in katasJson);
      });
  });

  it('fails when using a wrong URL', () => {
    var count = 0;
    return loadKatasJsonFrom(WRONG_URL)
      .catch(function () {
        count++;
      })
      .then(function () {
        assert(count === 1);
      });
  });

});
