import { existsSync, realpathSync, copySync } from 'fs-extra';
import { resolve } from 'path';
import chalk from 'chalk';

export default function createFiles({ dir, template }) {
  let tmplt;

  const ad = realpathSync(process.cwd());
  const p = resolve(__dirname, `../templates/${template}`);

  console.log(
    chalk.white(`Wooo will create files in ${resolve(ad, dir)} directory.`)
  );

  if (existsSync(p)) {
    tmplt = p;
  } else {
    tmplt = resolve(__dirname, `../templates/default`);

    console.log(chalk.red(`Template ${template} was not found!`));
    console.log(chalk.yellow(`Installing default template instead...`));
  }

  // console.log(tmplt)
  copySync(tmplt, resolve(ad, dir));

  return chalk.green(
    `Wooo!!! Everything is done.
Let's build something cool.`
  );
}
