'use strict';

const { suite, add, cycle, complete, save } = require('benny');
const fetch = require('node-fetch');
const { props } = require('promises-extensionv1').default;

function delay (timeout, value) {
  return new Promise((resolve) => setTimeout(resolve(value), timeout));
}

const arraySample = [];

for (let i = 0; i < 100; i++) {
  arraySample.push(i);
}

module.exports = suite(
  'Props Benchmarks',

  add('Props> Simple Object', async () => {
    const o = {
      arrayValues: ['123', 1, {}],
      object: {
        mock: 'value',
        nested: {
          inner: {
            test3: 'test'
          }
        }
      }
    };

    return props(o);
  }),

  add('Props> Promises Object', async () => {
    const o = {
      test: delay(60000, {
        hello: {
          test: 'string',
        },
      }),
      test2: fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
        {}
      ).then((response) => response.json()),
      normal: {
        array: ['123', '13'],
      }
    };

    return props(o);
  }),

  cycle(),
  complete(),
  save({ file: 'props', details: true, folder: './cases/promises-extension/results', format: 'chart.html' }),
)