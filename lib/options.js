'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = require('../package.json');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
    var opts;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = {
              template: 'react-router-4',
              manager: 'yarn',
              dir: './src'
            };


            if (args.version) {
              console.log('Wooo\'s current version is ' + _package.version + '.');
              process.exit();
            }

            if (args.template && args.template.length > 0) {
              opts.template = argv.template;
            }

            if (args.npm) {
              opts.manager = 'npm';
            }

            if (args.dir && args.dir.length > 0) {
              opts.dir = args.dir;
            }

            return _context.abrupt('return', opts);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function checkOptions(_x) {
    return _ref.apply(this, arguments);
  }

  return checkOptions;
}();