'use strict';

const { suite, add, cycle, complete, save } = require('benny');
const { each } = require('promises-extensionv1').default;

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
  'Each Benchmarks',

  add('Each> Simple Array', () => {
    return each(arraySample, (() => { }));
  }),

  add('Each> Promise Array', () => {
    return each(promiseArraySample, (() => { }));
  }),

  cycle(),
  complete(),
  save({ file: 'v1.each', details: true, folder: './cases/promises-extension/results', format: 'chart.html' }),
)