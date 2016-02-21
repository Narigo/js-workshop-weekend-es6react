var assert = require('assert');

describe('test setup', () => {

  it('works', () => {
    assert(true);
  });

});

function loadKatasJsonFrom() {
  return Promise.resolve({groups:true});
}

describe('loading the katas JSON', () => {

  it('works', () => {
    return loadKatasJsonFrom()
      .then(function(katasJson) {
        assert('groups' in katasJson);
      });
  });

});
