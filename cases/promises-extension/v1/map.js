'use strict';

const { suite, add, cycle, complete, save } = require('benny');
const { map } = require('promises-extensionv1').default;

function delay (timeout, value) {
  return new Promise((resolve) => setTimeout(resolve(value), timeout));
}

const arraySample = [],
  promiseArraySample = [];

for (let i = 0; i < 100; i++) {
  arraySample.push(i);
  promiseArraySample.push(delay(1, i));
}

module.exports = suite(
  'Map Benchmarks',

  add('Map> Simple Array', () => {
    return map(arraySample, (value) => { });
  }),

  add('Map> Promise Array', () => {
    return map(promiseArraySample, (value) => { });
  }),

  add('Map> Simple Array(20 concurrency)', () => {
    return map(arraySample, (value) => { }, { concurrency: 100 });
  }),

  add('Map> Promise Array(20 concurrency', () => {
    return map(promiseArraySample, (value) => { }, { concurrency: 100 });
  }),

  cycle(),
  complete(),
  save({ file: 'map', details: true, folder: './cases/promises-extension/results', format: 'chart.html' }),
)