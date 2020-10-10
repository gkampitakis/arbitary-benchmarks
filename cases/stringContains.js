'use strict';

const bench = require('../bennyWrapper');

const testStr = 'dsdsadsadasdasdsadshellodsadgjfgdf';
const needle = 'hello';

bench('String Contains', [
  {
    title: 'Includes',
    fn: function () {
      testStr.includes(needle);
    }
  },
  {
    title: 'Match',
    fn: function () {
      testStr.match(/hello/);
    }
  },
  {
    title: 'Test',
    fn: function () {
      /hello/.test(testStr);
    }
  },
  {
    title: 'IndexOf',
    fn: function () {
      testStr.indexOf(needle);
    }
  },
  {
    title: 'Search',
    fn: function () {
      testStr.search(/hello/);
    }
  }
]);
