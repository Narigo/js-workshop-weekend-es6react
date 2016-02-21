
import fetch from 'node-fetch';

export default class GroupedKatas {
  load(url) {
    return loadKatasJsonFrom(url);
  }
}

function loadKatasJsonFrom(url) {
  return fetch(url)
    .then((res) => res.json())
    .catch(() => {
      throw 'Error loading katas.';
    })
    .then((json) => {
      if ('groups' in json) {
        return json;
      }
      throw 'Invalid JSON format.';
    });
}
