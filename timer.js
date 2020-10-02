'use strict'

const benchmark = require('benchmark');
const suite = benchmark.Suite();

function getTime () {
  const t = process.hrtime();

  return Math.floor(t[0] * 1000 + t[1] / 1000000);
}

suite.add('Test Node Timer', function () { //Keep in mind this has higher accuracy

  getTime();

});

suite.add('Test Date Timer', function () {

  Date.now();

});

suite.on('cycle', cycle)

suite.run()

function cycle (e) {
  console.log(e.target.toString())
}
