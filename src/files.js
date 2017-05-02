import { existsSync, realpathSync, copySync } from 'fs-extra';
import { resolve } from 'path';
import { red, green, yellow, white } from './fn';

export default function createFiles({ dir, template }) {
  let tmplt;

  const ad = realpathSync(process.cwd());
  const p = resolve(__dirname, `../templates/${template}`);

  const resolvedDir = resolve(ad, dir);

  console.log(white(`Wooo will create files in ${resolvedDir} directory.`));

  if (existsSync(p)) {
    tmplt = p;
  } else {
    tmplt = resolve(__dirname, `../templates/default`);

    console.log(red(`Template ${template} was not found!`));

    console.log(yellow(`Installing default template instead...`));
  }

  copySync(tmplt, resolvedDir);

  return green(
    `Wooo!!! Everything is done.
Let's build something cool.`
  );
}
