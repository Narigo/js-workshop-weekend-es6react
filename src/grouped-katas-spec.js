import assert from 'assert';
import {promiseThat,isRejectedWith} from 'hamjest';

describe('test setup', () => {

  it('works', () => {
    assert(true);
  });

});

// 1) load it correctly
// 2) load a wrong URL
// 3) load wrong structured file
import {KATAS_URL, WRONG_URL, INVALID_URL, NON_EXISTENT_URL} from './config'
import GroupedKatas from './grouped-katas';

function loadKatasJsonFrom(url) {
  return new GroupedKatas().load(url);
}

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
