var assert = require('assert');
var hamjest = require('hamjest');
var promiseThat = hamjest.promiseThat;
var isRejectedWith = hamjest.isRejectedWith;

describe('test setup', () => {

  it('works', () => {
    assert(true);
  });

});

var KATAS_URL = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';
var WRONG_URL = 'no-url';
var NON_EXISTENT_URL = 'http://wrong.url.test/katas.json';
var INVALID_URL = 'http://katas.tddbin.com/katas/es6/language/__all__.json';
// 1) load it correctly
// 2) load a wrong URL
// 3) load wrong structured file

var fetch = require('node-fetch');

function loadKatasJsonFrom(url) {
  return fetch(url)
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      throw 'Error loading katas.';
    })
    .then(function (json) {
      if ('groups' in json) {
        return json;
      }
      throw 'Invalid JSON format.';
    });
}

describe('loading the katas JSON', () => {

  it('works', () => {
    return loadKatasJsonFrom(KATAS_URL);
  });

  it('fails when using a wrong URL', () => {
    return promiseThat(loadKatasJsonFrom(WRONG_URL),
      isRejectedWith('Error loading katas.'));
  });

  it('fails when using a non existent URL', () => {
    return promiseThat(loadKatasJsonFrom(NON_EXISTENT_URL),
      isRejectedWith('Error loading katas.'));
  });

  it('fails when getting an invalid URL', () => {
    return promiseThat(loadKatasJsonFrom(INVALID_URL),
      isRejectedWith('Invalid JSON format.'));
  });

});
