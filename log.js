'use strict'

const chalk = require('chalk');

module.exports = {
  results: (...args) => console.log(chalk.green(...args)),
  start: (message) => console.log(chalk.blue(message))
};