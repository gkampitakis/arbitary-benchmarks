'use strict';

const bench = require('../bennyWrapper');

const testArray = [];

for (let i = 0; i <= 10000; i++) {
  testArray.push(i);
}

bench('Copy Array', [
  {
    title: 'Loop',
    fn: function () {
      const newArray = [];

      for (let i = 0; i < testArray.length; i++) {
        newArray.push(i);
      }
    }
  },
  {
    title: 'Spread',
    fn: function () {
      [...testArray];
    }
  },
  {
    title: 'Slice',
    fn: function () {
      testArray.slice();
    }
  },
  {
    title: 'Concat',
    fn: function () {
      [].concat(testArray);
    }
  },
  {
    title: 'Map',
    fn: function () {
      testArray.map(i => i);
    }
  },
  {
    title: 'Array.From',
    fn: function () {
      Array.from(testArray);
    }
  }
]);
