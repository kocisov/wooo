import clear from 'clear';
import { bold } from './utils';
import { version } from '../package.json';

export default function options(argv) {
  let opts = {};

  clear();

  if (argv.version) {
    bold(`Wooo's current version is ${version}.`);
    process.exit();
  }

  if (argv.npm) {
    opts.useNpm = true;
  }

  if (argv.dir && argv.dir.length > 0) {
    opts.dir = argv.dir;
  }

  return new Promise(res => {
    res(opts);
  });
}
