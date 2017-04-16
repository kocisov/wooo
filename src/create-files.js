import { copy } from 'fs-extra';
import clear from 'clear';
import { join } from 'path';
import { green, bold, blue, red } from './utils';
import { realpathSync } from 'fs-extra';

export default function createFiles(directory) {
  const pth = realpathSync(process.cwd());

  copy(join(pth, '/files'), directory, err => {
    if (err) {
      return red(`Couldn't create some files. + ${err}`);
    }

    clear();

    green(`Successfully created wooo's files and installed dependencies.`);
    bold('-------------------------------------------------------------');
    green(`Redux is ready for use!`);
    blue(`Build something awesome :)`);
    bold('-------------------------------------------------------------');
  });
}
