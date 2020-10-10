'use strict';

const bench = require('../bennyWrapper');

function getTime () {
  const t = process.hrtime();

  return Math.floor(t[0] * 1000 + t[1] / 1000000);
}

bench('Timer', [
  {
    title: 'Test Node Timer', // NOTE: Keep in mind this has higher accuracy
    fn: function () {
      getTime();
    }
  },
  {
    title: 'Test Date Timer',
    fn: function () {
      Date.now();
    }
  }
]);
