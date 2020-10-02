'use strict'

const benchmark = require('benchmark');
const suite = benchmark.Suite();

const testArray = [];

for (let i = 0; i <= 10000; i++) {

  testArray.push(i);

}

suite.add('Loop', function () {

  const newArray2 = [];

  for (let i = 0; i < testArray.length; i++) {

    newArray2.push(i);

  }


});

suite.add('Spread', function () {

  const newArray = [...testArray];

});

suite.add('Slice', function () {

  const newArray = testArray.slice();

});

suite.add('Concat', function () {

  const newArray = [].concat(testArray);

});

suite.add('Map', function () {

  const newArray = testArray.map(i => i);

});

suite.add('Array.From', function () {

  const newArray = Array.from(testArray);

});

suite.on('cycle', cycle)

suite.run()

function cycle (e) {
  console.log(e.target.toString())
}
