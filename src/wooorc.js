import { stat, readFile } from 'fs-extra';
import { blue } from './utils';

export default function checkRc({ useNpm, dir }) {
  return new Promise(res => {
    if (useNpm && dir) {
      res({
        manager: useNpm ? 'npm' : 'yarn',
        router: 'v3',
        dir,
      });
    }

    stat('./.wooorc', err => {
      if (err && err.code === 'ENOENT') {
        blue('.wooorc file was not found in current directory.');

        res({
          manager: 'yarn',
          router: 'v4',
        });
      } else {
        readFile('./.wooorc', (e, r) => {
          res(JSON.parse(r));
        });
      }
    });
  });
}
