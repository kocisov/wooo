'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exec = exec;
exports.green = green;
exports.red = red;
exports.blue = blue;
exports.yellow = yellow;
exports.bold = bold;

var _child_process = require('child_process');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exec(command, e) {
  (0, _child_process.execSync)(command, {
    stdio: 'inherit',
    e: e
  });
}

function green(t) {
  console.log(_chalk2.default.green(t));
}

function red(t) {
  console.log(_chalk2.default.red(t));
}

function blue(t) {
  console.log(_chalk2.default.blue(t));
}

function yellow(t) {
  console.log(_chalk2.default.yellow(t));
}

function bold(t) {
  console.log(_chalk2.default.bold(t));
}