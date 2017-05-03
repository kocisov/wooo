'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = argv;

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function argv() {
  return _yargs2.default.usage('Usage: wooo [Options]').example('wooo -d ./src/ -t react-router-4', 'Create react-router-4 template files and install its needed dependencies').alias('v', 'version').alias('d', 'dir').alias('n', 'npm').alias('t', 'template').alias('h', 'help').boolean('v').boolean('n').string('d').string('t').describe('v', 'Show version of Wooo').describe('d', 'Specify directory where Wooo should create files').describe('t', 'Specify template that Wooo should create').describe('n', 'Specify if Wooo should install dependencies with npm instead of yarn').help('h').argv;
}