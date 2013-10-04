var champion = require('../');
var test = require('tape');

var LULU = {
  "version": "3.10.3",
  "id": "Lulu",
  "key": "117",
  "name": "Lulu",
  "title": "the Fae Sorceress",
  "blurb": "Perhaps more than any other champion in the League, Lulu marches to the beat of her own drum. During her youth in Bandle City, she spent most of her time wandering alone in the forest or lost in a daydream. It wasn't that she was antisocial; the ...",
  "info": {
    "attack": 4,
    "defense": 5,
    "magic": 7,
    "difficulty": 7
  },
  "image": {
    "full": "Lulu.png",
    "sprite": "champion1.png",
    "group": "champion",
    "x": 288,
    "y": 48,
    "w": 48,
    "h": 48
  },
  "tags": [
    "Support"
  ],
  "partype": "Mana",
  "stats": {
    "hp": 415,
    "hpperlevel": 82,
    "mp": 200,
    "mpperlevel": 55,
    "movespeed": 325,
    "armor": 9,
    "armorperlevel": 3.7,
    "spellblock": 30,
    "spellblockperlevel": 0,
    "attackrange": 550,
    "hpregen": 5,
    "hpregenperlevel": 0.6,
    "mpregen": 5,
    "mpregenperlevel": 0.5,
    "crit": 0,
    "critperlevel": 0,
    "attackdamage": 44,
    "attackdamageperlevel": 2.6,
    "attackspeedoffset": 0,
    "attackspeedperlevel": 2.25
  }
};

test('champion', function(t) {
  t.plan(2);

  t.deepEqual(champion(117), LULU, 'Should return correct champion.');
  t.equal(champion(0), null, 'Should return `null` when no champion is found.');
});