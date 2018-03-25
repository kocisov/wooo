import { execSync } from 'child_process'
import chalk from 'chalk'

export const exec = (cmd) =>
  execSync(cmd, {
    stdio: 'inherit',
  })

export const yellow = (n) => chalk.yellow(n)
export const white = (n) => chalk.white(n)
export const red = (n) => chalk.red(n)
export const green = (n) => chalk.green(n)
