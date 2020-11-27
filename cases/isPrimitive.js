'use strict';

const bench = require('../bennyWrapper');
const values = [
  'foo',
  1,
  function () { },
  {},
  new Date(),
  /foo/,
  Symbol('foo'),
  null,
  undefined,
  void 0,
  true,
  false,
  NaN,
  Infinity
];

function isPrimitive (val) {
  return val == null || /^[sbn]/.test(typeof val);
}

function isPrimitiveV2 (val) {
  if (typeof val === 'object') {
    return val === null;
  }

  return typeof val !== 'function';
}

bench('Is Primitive', [
  {
    title: 'Regex',
    fn: function () {
      return values.forEach(value => isPrimitive(value));
    }
  },
  {
    title: 'Typeof',
    fn: function () {
      return values.forEach(value => isPrimitiveV2('test'));
    }
  }
]);