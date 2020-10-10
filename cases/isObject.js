'use strict';

const bench = require('../bennyWrapper');
const isObjectV1 = n => Object.prototype.toString.call(n) === '[object Object]';
const isObjectV2 = o => !!o && o.constructor === Object;

const object = { test: 'mock' };
const notObject = [];

bench('Is Object', [
  {
    title: 'Object to String> Object',
    fn: function () {
      return isObjectV1(object);
    }
  },
  {
    title: 'Object to String> Array',
    fn: function () {
      return isObjectV1(notObject);
    }
  },
  {
    title: 'Object Constructor> Object',
    fn: function () {
      return isObjectV2(object);
    }
  },
  {
    title: 'Object Constructor> Array',
    fn: function () {
      return isObjectV2(notObject);
    }
  }
]);