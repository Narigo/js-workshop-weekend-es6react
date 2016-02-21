var assert = require('assert');

describe('test setup', () => {

  it('works', () => {
    assert(true);
  });

});

var KATAS_URL = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';
var INVALID_URL = 'http://katas.tddbin.com/katas/es6/language/__all__.json';
// 1) load it correctly
// 2) load a wrong URL
// 3) load wrong structured file

function loadKatasJsonFrom() {
  return Promise.resolve({groups : true});
}

describe('loading the katas JSON', () => {

  it('works', () => {
    return loadKatasJsonFrom()
      .then(function (katasJson) {
        assert('groups' in katasJson);
      });
  });

});
