var champions = require('./lib/champions');

module.exports = function(value, callback) {
  var i = champions.length;
  while (i--) {
    if (parseInt(champions[i].key, 10) === value) {
      return callback(null, champions[i]);
    }
  }
  callback(new Error('No champion found with key ' + value));
};