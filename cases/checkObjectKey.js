'use strict'

const benchmark = require('benchmark');
const { results, start } = require('../log');
const suite = benchmark.Suite();

start('Check Object Key benches starting ...');

const testObject = {
  key0: 'mockKey',
  key1: 'mockKey',
  key2: 'mockKey',
  key3: 'mockKey'
};

suite.add('In', function () {
  if ('key2' in testObject) {
    return true;
  }
});

suite.add('===undefined', function () {
  if (testObject.key2 !== undefined) {
    return true;
  }
});

suite.add('!!', function () {
  if (!!testObject.key2) {
    return true;
  }
});

suite.add('hasOwnProperty', function () {
  if (testObject.hasOwnProperty('key2')) {
    return true;
  }
});

suite.on('cycle', cycle)

suite.run()

function cycle (e) {
  results(e.target.toString())
}
