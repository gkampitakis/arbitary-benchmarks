'use strict'

const benchmark = require('benchmark');
const { results, start } = require('../log');
const suite = benchmark.Suite();

start('String contains benches starting ...');

const testStr = 'dsdsadsadasdasdsadshellodsadgjfgdf',
  needle = 'hello';

suite.add('Includes', function () {

  const res = testStr.includes(needle);

});

suite.add('Match', function () {

  const res = testStr.match(/hello/);

});

suite.add('Test', function () {

  const res = /hello/.test(testStr);

});

suite.add('IndexOf', function () {

  const res = testStr.indexOf(needle);

});

suite.add('Search', function () {

  const res = testStr.search(/hello/);

});

suite.on('cycle', cycle)

suite.run()

function cycle (e) {
  results(e.target.toString());
}
