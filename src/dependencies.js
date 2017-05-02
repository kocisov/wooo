import chalk from 'chalk';
import { execSync } from 'child_process';

export async function prepare({ manager, template }) {
  const _manager = manager;
  const command = manager && manager === 'yarn'
    ? 'yarn add'
    : 'npm install --save';

  let dependencies = ['react-redux', 'redux', 'redux-thunk'];

  if (template === 'react-router-4') {
    dependencies.push('react-router-dom', 'react-router-redux@next');
  } else {
    dependencies.push('react-router-redux', 'react-router@3.0.2');
  }

  return {
    manager: _manager,
    command,
    dependencies,
  };
}

const exec = cmd =>
  execSync(cmd, {
    stdio: 'inherit',
  });

export async function install({ command, manager, dependencies }) {
  console.log(chalk.yellow(`Installing dependencies with ${manager}`));

  const e = await exec(`${command} ${dependencies.join(' ')}`);

  return e;
}
