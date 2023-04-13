import { writeFileSync, appendFileSync } from 'fs';

writeFileSync(
  'notes.txt',
  'My name is Walker and this text was updated from Node.JS'
);

appendFileSync(
  'notes.txt',
  ' ...and this text was appended via the appendFileSync module'
);
