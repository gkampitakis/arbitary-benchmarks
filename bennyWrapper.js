'use strict';

const { suite, add, cycle, complete, save } = require('benny');

function bench (title, functions) {
  const saveSettings = {
    file: title.replace(/\s/g, '_').toLowerCase(),
    details: true,
    folder: './results',
    format: 'chart.html'
  };

  return suite(
    title,
    ...functions.map(({ title, fn }) => add(title, fn)),
    cycle(),
    complete(),
    save(saveSettings)
  );
}

module.exports = bench;
