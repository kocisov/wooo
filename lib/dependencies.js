'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.prepare = undefined;

var prepare = exports.prepare = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
    var manager = _ref2.manager,
        template = _ref2.template;

    var _manager, command, dependencies;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _manager = manager;
            command = manager && manager === 'yarn' ? 'yarn add' : 'npm install --save';
            dependencies = ['react-redux', 'redux', 'redux-thunk'];


            if (template === 'react-router-4') {
              dependencies.push('react-router-dom', 'react-router-redux@next');
            } else {
              dependencies.push('react-router-redux', 'react-router@3.0.2');
            }

            return _context.abrupt('return', {
              manager: _manager,
              command: command,
              dependencies: dependencies
            });

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function prepare(_x) {
    return _ref.apply(this, arguments);
  };
}();

var install = exports.install = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_ref4) {
    var command = _ref4.command,
        manager = _ref4.manager,
        dependencies = _ref4.dependencies;
    var e;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(_chalk2.default.yellow('Installing dependencies with ' + manager));

            _context2.next = 3;
            return exec(command + ' ' + dependencies.join(' '));

          case 3:
            e = _context2.sent;
            return _context2.abrupt('return', e);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function install(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var exec = function exec(cmd) {
  return (0, _child_process.execSync)(cmd, {
    stdio: 'inherit'
  });
};