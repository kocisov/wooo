#!/usr/bin/env node
const chalk = require('chalk')
const clear = require('clear')
const execSync = require('child_process').execSync
const yargs = require('yargs')
const fs = require('fs-extra')

clear()

const exec = (command, env) =>
  execSync(command, { stdio: 'inherit', env })

const argv = yargs
  .alias('v', 'version')
  .alias('d', 'dir')
  .alias('n', 'npm')
  .argv

const useDir = argv.dir.length > 0 ? argv.dir : '.'
const useNpm = argv.npm || false
const version = argv.version || false

if (version) {
  return console.log('Wooo\'s version is:', chalk.green('0.1.1'))
}

const command = useNpm
  ? ['npm', 'install', '--save', 'react-redux', 'redux', 'redux-thunk', 'react-router', 'react-router-redux']
  : ['yarn', 'add', 'react-redux', 'redux', 'redux-thunk', 'react-router', 'react-router-redux']

console.log(chalk.yellow('Installing dependencies with ' + command[0] + '.'))
exec(`${command.join(' ')}`)

clear()

console.log(chalk.yellow(`Creating files in ${useDir} directory.`))
fs.copy(__dirname + '/files', useDir, err => {
  if (err) {
    return console.log(chalk.red('Couldn\'t create files.\n'), err)
  }

  console.log(chalk.green('Successfully created wooo\'s files'))
  console.log(chalk.blue('Redux is ready for use!'))
})
