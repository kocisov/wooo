import { version } from '../package.json';

export default async function checkOptions(args) {
  let opts = {
    template: 'react-router-4',
    manager: 'yarn',
    dir: './src',
  };

  if (args.version) {
    console.log(`Wooo's current version is ${version}.`);
    process.exit();
  }

  if (args.template && args.template.length > 0) {
    opts.template = argv.template;
  }

  if (args.npm) {
    opts.manager = 'npm';
  }

  if (args.dir && args.dir.length > 0) {
    opts.dir = args.dir;
  }

  return opts;
}
