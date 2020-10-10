'use strict';

const bench = require('../bennyWrapper');
const testObject = {
  key0: 'mockKey',
  key1: 'mockKey',
  key2: 'mockKey',
  key3: 'mockKey'
};

module.exports = bench('Check Object Key', [
  {
    title: 'In',
    fn: function () {
      if ('key2' in testObject) {
        return true;
      }
    }
  },
  {
    title: '===undefined',
    fn: function () {
      if (testObject.key2 !== undefined) {
        return true;
      }
    }
  },
  {
    title: '!!',
    fn: function () {
      if (!!testObject.key2) {
        return true;
      }
    }
  },
  {
    title: 'hasOwnProperty',
    fn: function () {
      if (testObject.hasOwnProperty('key2')) {
        return true;
      }
    }
  }
]);
