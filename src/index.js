
import fetch from 'node-fetch';

export default function loadKatasJsonFrom(url) {
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
