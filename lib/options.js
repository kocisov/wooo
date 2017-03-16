'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = options;

var _utils = require('./utils');

var _package = require('../package.json');

function options(argv) {
  if (argv.version) {
    return (0, _utils.bold)('Wooo\'s current version is ' + _package.version + '.');
  }
}