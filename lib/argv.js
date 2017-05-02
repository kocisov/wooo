'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = argv;

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function argv() {
  return _yargs2.default.alias('v', 'version').alias('d', 'dir').alias('n', 'npm').alias('t', 'template').argv;
}