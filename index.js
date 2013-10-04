var champions = require('./lib/champions');

module.exports = function(value) {
  var i = champions.length;
  while (i--) {
    if (parseInt(champions[i].key, 10) === value) {
      return champions[i];
    }
  }
  return null;
};