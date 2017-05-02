import yargs from 'yargs';

export default function argv() {
  return yargs
    .alias('v', 'version')
    .alias('d', 'dir')
    .alias('n', 'npm')
    .alias('t', 'template').argv;
}
