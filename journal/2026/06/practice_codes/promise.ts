import { readFile } from 'fs/promises';

const p = readFile('sample.txt', 'utf-8');

p.then((data) => {
  console.log('SUCCESS', data);
});
p.catch((error) => {
  console.log('ERROR', error);
});
