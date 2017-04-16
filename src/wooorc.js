import { stat, readFile } from 'fs-extra';
import { blue } from './utils';

export default function checkRc({ useNpm, dir, template }) {
  return new Promise(res => {
    if (useNpm && dir) {
      res({
        manager: useNpm ? 'npm' : 'yarn',
        template: template === 'r3' ? 'r3' : 'r4',
        dir,
      });
    }

    stat('./.wooorc', err => {
      if (err && err.code === 'ENOENT') {
        blue('.wooorc file was not found in current directory.');

        res({
          manager: 'yarn',
          template: 'r4',
        });
      } else {
        readFile('./.wooorc', (e, r) => {
          res(JSON.parse(r));
        });
      }
    });
  });
}
