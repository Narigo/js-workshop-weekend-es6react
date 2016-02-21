
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

module.exports = loadKatasJsonFrom;
