const fs = require('fs');
const { resolve } = require('path');

function dp(pth, done) {
  fs.open(pth, 'r', (err, fd) => {
    if (err) {
      return done(err);
    }

    done();
  });
}

function resolveDir(dir) {
  return resolve(__dirname, dir);
}

describe('after running wooo', () => {
  describe('containers', () => {
    it('should created containers folder', done => {
      dp(resolveDir('../_test_/containers'), done);
    });

    describe('App', () => {
      it('should created containers/App folder', done => {
        dp(resolveDir('../_test_/containers/App'), done);
      });

      it('should created containers/App/index.js file', done => {
        dp(resolveDir('../_test_/containers/App/index.js'), done);
      });
    });

    describe('Home', () => {
      it('should created containers/Home folder', done => {
        dp(resolveDir('../_test_/containers/Home'), done);
      });

      it('should created containers/Home/index.js file', done => {
        dp(resolveDir('../_test_/containers/Home/index.js'), done);
      });
    });
  });

  describe('modules', () => {
    it('should created modules folder', done => {
      dp(resolveDir('../_test_/modules'), done);
    });

    it('should created modules/index file', done => {
      dp(resolveDir('../_test_/modules/index.js'), done);
    });

    it('should created modules/user file', done => {
      dp(resolveDir('../_test_/modules/user.js'), done);
    });
  });

  describe('static', () => {
    it('should created static folder', done => {
      dp(resolveDir('../_test_/static'), done);
    });

    it('should created static/index.css file', done => {
      dp(resolveDir('../_test_/static/index.css'), done);
    });

    it('should created static/normalize.css file', done => {
      dp(resolveDir('../_test_/static/normalize.css'), done);
    });
  });

  describe('store', () => {
    it('should created store folder', done => {
      dp(resolveDir('../_test_/store'), done);
    });

    it('should created store/index file', done => {
      dp(resolveDir('../_test_/index.js'), done);
    });
  });
});
