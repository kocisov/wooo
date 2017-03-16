'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = options;

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _utils = require('./utils');

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function options(argv) {
  var opts = {};

  (0, _clear2.default)();

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

  return new Promise(function (res) {
    res(opts);
  });
}