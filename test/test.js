const fs = require('fs')
const { resolve } = require('path')

function dp (pth, done) {
  fs.open(pth, 'r', (err, fd) => {
    if (err) {
      return done(err)
    }

    done()
  })
}

describe('after running wooo', () => {
  it('should created containers folder', (done) => {
    dp(resolve(__dirname, '../_test_/containers'), done)
  })

  it('should created modules folder', (done) => {
    dp(resolve(__dirname, '../_test_/modules'), done)
  })

  it('should created static folder', (done) => {
    dp(resolve(__dirname, '../_test_/static'), done)
  })

  it('should created store folder', (done) => {
    dp(resolve(__dirname, '../_test_/store'), done)
  })

  it('should created index file', (done) => {
    dp(resolve(__dirname, '../_test_/index.js'), done)
  })
})
