'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = options;

var _utils = require('./utils');

var _package = require('../package.json');

function options(argv) {
  var opts = {};

  if (argv.version) {
    (0, _utils.bold)('Wooo\'s current version is ' + _package.version + '.');
    process.exit();
  }

  if (argv.npm) {
    opts.useNpm = true;
  }

  if (argv.dir && argv.dir.length > 0) {
    opts.dir = argv.dir;
  }

  return Promise(function (res) {
    res(opts);
  });
}