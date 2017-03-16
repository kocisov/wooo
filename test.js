const fs = require('fs')
const { join } = require('path')

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
    dp(join(__dirname, '/tst/components'), done)
  })

  it('should created containers folder', (done) => {
    dp(join(__dirname, '/tst/containers'), done)
  })

  it('should created modules folder', (done) => {
    dp(join(__dirname, '/tst/modules'), done)
  })

  it('should created static folder', (done) => {
    dp(join(__dirname, '/tst/static'), done)
  })

  it('should created store folder', (done) => {
    dp(join(__dirname, '/tst/store'), done)
  })

  it('should created index file', (done) => {
    dp(join(__dirname, '/tst/index.js'), done)
  })
})
