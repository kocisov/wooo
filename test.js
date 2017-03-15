const fs = require('fs')

function dp (pth, done) {
  fs.open(pth, 'r', (err, fd) => {
    if (err) {
      return done(err)
    }
    done()
  })
}

describe('after running wooo', () => {
  it('should created components folder', (done) => {
    dp(`${__dirname}/tst/components`, done)
  })

  it('should created containers folder', (done) => {
    dp(`${__dirname}/tst/containers`, done)
  })

  it('should created modules folder', (done) => {
    dp(`${__dirname}/tst/modules`, done)
  })

  it('should created static folder', (done) => {
    dp(`${__dirname}/tst/static`, done)
  })

  it('should created store folder', (done) => {
    dp(`${__dirname}/tst/store`, done)
  })

  it('should created index file', (done) => {
    dp(`${__dirname}/tst/index.js`, done)
  })
})
