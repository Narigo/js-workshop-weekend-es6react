import assert from 'assert';
import {promiseThat,isRejectedWith} from 'hamjest';

describe('test setup', () => {

  it('works', () => {
    assert(true);
  });

});

const KATAS_URL = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';
const WRONG_URL = 'no-url';
const NON_EXISTENT_URL = 'http://wrong.url.test/katas.json';
const INVALID_URL = 'http://katas.tddbin.com/katas/es6/language/__all__.json';
// 1) load it correctly
// 2) load a wrong URL
// 3) load wrong structured file
import loadKatasJsonFrom from './index';

describe('loading the katas JSON', () => {

  it('works', () => loadKatasJsonFrom(KATAS_URL));

  it('fails when using a wrong URL', () => {
    return promiseThat(loadKatasJsonFrom(WRONG_URL), isRejectedWith('Error loading katas.'));
  });

  it('fails when using a non existent URL', () => {
    return promiseThat(loadKatasJsonFrom(NON_EXISTENT_URL), isRejectedWith('Error loading katas.'));
  });

  it('fails when getting an invalid URL', () => {
    return promiseThat(loadKatasJsonFrom(INVALID_URL), isRejectedWith('Invalid JSON format.'));
  });

});
