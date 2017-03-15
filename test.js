const fs = require('fs')

describe('after running wooo', () => {
  it('should created components folder', (done) => {
    fs.open(`${__dirname}/tst/components`, 'r', (err, fd) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  it('should created containers folder', (done) => {
    fs.open(`${__dirname}/tst/containers`, 'r', (err, fd) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  it('should created modules folder', (done) => {
    fs.open(`${__dirname}/tst/modules`, 'r', (err, fd) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  it('should created static folder', (done) => {
    fs.open(`${__dirname}/tst/static`, 'r', (err, fd) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  it('should created store folder', (done) => {
    fs.open(`${__dirname}/tst/store`, 'r', (err, fd) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })
})
