import { readFile } from 'fs/promises';

const p = readFile('sample.txt', 'utf-8');

p.then((data) => {
  console.log('SUCCESS', data);
});
p.catch((error: unknown) => {
  // default error type is "any"
  console.log('ERROR', error);
});
p.finally(() => {
  console.log('FINALLY');
});
