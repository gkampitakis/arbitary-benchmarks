'use strict';

const bench = require('../bennyWrapper');

function chunkArrayV1 (array, chunkSize) {
  let chunkCount = Math.ceil(array.length / chunkSize);
  let chunks = new Array(chunkCount);
  for (let i = 0, j = 0, k = chunkSize; i < chunkCount; ++i) {
    chunks[i] = array.slice(j, k);
    j = k;
    k += chunkSize;
  }
  return chunks;
}

function chunkArrayV2 (array, chunkSize) { // NOTE: not optimal for big size arrays as well
  if (!array.length) return [];
  return [array.slice(0, chunkSize)].concat(chunkArrayV2(array.slice(chunkSize), chunkSize));
}

function chunkArrayV3 (array, chunkSize) {
  const chunks = [];
  while (array.length) {
    chunks.push(array.splice(0, chunkSize));
  }
  return chunks;
}

const arraySample = [];

for (let i = 0; i < 100; i++) {
  arraySample.push(i);
}

bench('Chunk Array', [
  {
    title: 'Chunk Array V1',
    fn: function () {
      return chunkArrayV1(arraySample, 12);
    }
  },
  {
    title: 'Chunk Array V2',
    fn: function () {
      return chunkArrayV2(arraySample, 12);
    }
  },
  {
    title: 'Chunk Array V3',
    fn: function () {
      return chunkArrayV3(arraySample, 12);
    }
  }
]);