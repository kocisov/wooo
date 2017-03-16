import { bold } from './utils'
import { version } from '../package.json'

export default function options (argv) {
  let opts = {}

  if (argv.version) {
    bold(`Wooo's current version is ${version}.`)
    process.exit()
  }

  if (argv.npm) {
    opts.useNpm = true
  }

  if (argv.dir && argv.dir.length > 0) {
    opts.dir = argv.dir
  }

  return Promise(res => {
    res(opts)
  })
}
