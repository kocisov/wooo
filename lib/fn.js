'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.green = exports.red = exports.white = exports.yellow = exports.exec = undefined;

var _child_process = require('child_process');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const exec = exports.exec = cmd => (0, _child_process.execSync)(cmd, {
  stdio: 'inherit'
});

const yellow = exports.yellow = n => _chalk2.default.yellow(n);

const white = exports.white = n => _chalk2.default.white(n);

const red = exports.red = n => _chalk2.default.red(n);

const green = exports.green = n => _chalk2.default.green(n);