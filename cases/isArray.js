'use strict';

const bench = require('../bennyWrapper');
const isArrayV1 = (a) => !!a && a.constructor === Array;
const isArrayV2 = (a) => Array.isArray(a);
const isArrayV3 = (a) => Object.prototype.toString.call(a) === '[object Array]';
const isArrayV4 = (a) => a instanceof Array;

const array = ['mock'];
const object = {};

bench('Is Array', [
  {
    title: 'Array Constructor> Array',
    fn: function () {
      return isArrayV1(array);
    }
  },
  {
    title: 'Array Constructor> Object',
    fn: function () {
      return isArrayV1(object);
    }
  },
  {
    title: 'Array isArray> Array',
    fn: function () {
      return isArrayV2(array);
    }
  },
  {
    title: 'Array isArray> Object',
    fn: function () {
      return isArrayV2(object);
    }
  },
  {
    title: 'Array to String> Array',
    fn: function () {
      return isArrayV3(array);
    }
  },
  {
    title: 'Array to String> Object',
    fn: function () {
      return isArrayV3(object);
    }
  },
  {
    title: 'Instanceof Array> Array',
    fn: function () {
      return isArrayV4(array);
    }
  },
  {
    title: 'Instanceof Array> Object',
    fn: function () {
      return isArrayV4(object);
    }
  }
]);