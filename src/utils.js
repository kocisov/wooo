import { execSync } from 'child_process';
import chalk from 'chalk';

export function exec(command, e) {
  execSync(command, {
    stdio: 'inherit',
    e,
  });
}

export function green(t) {
  console.log(chalk.green(t));
}

export function red(t) {
  console.log(chalk.red(t));
}

export function blue(t) {
  console.log(chalk.blue(t));
}

export function yellow(t) {
  console.log(chalk.yellow(t));
}

export function bold(t) {
  console.log(chalk.bold(t));
}
