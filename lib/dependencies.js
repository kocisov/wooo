'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.prepare = undefined;

let prepare = exports.prepare = (() => {
  var _ref = _asyncToGenerator(function* ({ manager, template }) {
    const _manager = manager;
    const command = manager && manager === 'yarn' ? 'yarn add' : 'npm install --save';

    let dependencies = ['react-redux', 'redux', 'redux-thunk'];

    if (template === 'react-router-4') {
      dependencies.push('react-router-dom', 'react-router-redux@next');
    } else {
      dependencies.push('react-router-redux', 'react-router@3.0.2');
    }

    return {
      manager: _manager,
      command,
      dependencies
    };
  });

  return function prepare(_x) {
    return _ref.apply(this, arguments);
  };
})();

let install = exports.install = (() => {
  var _ref2 = _asyncToGenerator(function* ({ command, manager, dependencies }) {
    console.log((0, _fn.yellow)(`Installing dependencies with ${manager}`));
    const e = yield (0, _fn.exec)(`${command} ${dependencies.join(' ')}`);
    return e;
  });

  return function install(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

var _fn = require('./fn');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }