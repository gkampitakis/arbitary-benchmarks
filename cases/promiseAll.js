'use strict';

const bench = require('../bennyWrapper');

function delay (timeout, value) {
  return new Promise((resolve) => setTimeout(resolve(value), timeout));
}

const arraySample = [],
  promiseArraySample = [];

for (let i = 0; i < 1000; i++) {
  arraySample.push(i);
  promiseArraySample.push(delay(1, i));
}

function PromiseAll (promises) {
  const { length } = promises;
  const r = [];
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < length; i++) {
      try {
        const res = await promises[i];
        r.push(r);
      } catch (e) {
        reject(e);
      }
    }
    resolve(r);
  });
}

bench('Promise All', [
  {
    title: 'Native Promise All(simple Array)',
    fn: function () {
      return Promise.all(arraySample);
    }
  },
  {
    title: 'Loop Promise All(simple Array)',
    fn: function () {
      return PromiseAll(arraySample);
    }
  },
  {
    title: 'Native Promise All(promise Array)',
    fn: function () {
      return Promise.all(promiseArraySample);
    }
  },
  {
    title: 'Loop Promise All(promise Array)',
    fn: function () {
      return PromiseAll(promiseArraySample);
    }
  }
]);
