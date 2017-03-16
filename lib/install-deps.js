'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = installDeps;

var _utils = require('./utils');

var deps = ['react-redux', 'redux', 'redux-thunk'];

function installDeps(_ref) {
  var manager = _ref.manager,
      router = _ref.router;

  var command = manager === 'yarn' ? 'yarn add' : 'npm install --save';

  if (router === 'v4') {
    deps.push('react-router-dom');
  } else {
    deps.push('react-router-redux', 'react-router@3.0.2');
  }

  (0, _utils.yellow)('Installing dependencies with ' + manager);
  (0, _utils.blue)(command + ' ' + deps.join(' '));
  // exec(`${command.join(' ')}`)
}