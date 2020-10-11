'use strict';

const { suite, add, cycle, complete, save } = require('benny');
const { allSettled } = require('promises-extensionv2');

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
  'AllSettled Benchmarks',

  add('AllSettled> Simple Array', () => {
    return allSettled(arraySample);
  }),

  add('AllSettled> Promise Array', () => {
    return allSettled(promiseArraySample);
  }),

  add('AllSettled Native> Simple Array', () => {
    return Promise.allSettled(arraySample);
  }),

  add('AllSettled Native> Promise Array', () => {
    return Promise.allSettled(promiseArraySample);
  }),

  cycle(),
  complete(),
  save({ file: 'v2.allSettled', details: true, folder: './cases/promises-extension/results', format: 'chart.html' }),
)