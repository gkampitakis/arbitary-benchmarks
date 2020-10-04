'use strict'

const benchmark = require('benchmark');
const { results, start } = require('../log');
const suite = benchmark.Suite();

start('Timer benches starting ...');

function getTime () {
  const t = process.hrtime();

  return Math.floor(t[0] * 1000 + t[1] / 1000000);
}

suite.add('Test Node Timer', function () { //NOTE: Keep in mind this has higher accuracy

  getTime();

});

suite.add('Test Date Timer', function () {

  Date.now();

});

suite.on('cycle', cycle)

suite.run()

function cycle (e) {
  results(e.target.toString());
}
