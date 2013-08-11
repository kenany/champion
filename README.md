# champion

Get a League of Legends champion from their key.

[![Build Status](https://travis-ci.org/KenanY/champion.png)](https://travis-ci.org/KenanY/champion)
[![Testling Badge](https://ci.testling.com/KenanY/champion.png)](https://ci.testling.com/KenanY/champion)

## Example

``` javascript
var champion = require('champion');

champion(117, function(error, champ) {
  if (error) throw error;

  console.log(champ);
});
```

## Installation

``` bash
$ npm install champion
```

[Browserify](https://github.com/substack/node-browserify) for the browser or use
[Component](https://github.com/component/component):

``` bash
$ component install KenanY/champion
```

## API

### champion(key, callback)

Look up a champion using a _Number_ `key` and call `callback(error, champ)`
where `champ` is an _Object_.

## The array

Yeah, it's huge, but the current method is better than using `fs` or `http`.

If a new champion hasn't been added to the array yet, feel free to open a pull
request. In the future, I might move the array to its own module so that others
can use it in their modules.

## Lessons learned

Originally, this module used `fs.createReadStream` in order to load a JSON file
of champions. This `ReadStrean` was then piped to
[JSONStream](https://github.com/dominictarr/JSONStream), but this caused
problems because of a
[known issue](https://github.com/creationix/jsonparse/issues/2) involving
precise numbers (which are used for a champion's health regeneration and such).

Using `fs` also prevented this module from working in the browser. So, I did a
quick refactor and replaced the JSON file with a JavaScript one. This JavaScript
file exports the array of champions and as such can be `require()`d and
browserified.