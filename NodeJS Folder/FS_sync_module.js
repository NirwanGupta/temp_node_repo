const fs = require('fs');

console.log(`Start`);
//  to read the contents of a file
const first = fs.readFileSync('./texts/first.txt','utf8');
console.log(first);
const second = fs.readFileSync('./texts/second.txt','utf8');
console.log(second);

//  to write content => if(file already exists)->overwrite it
//                      else->create a new file
fs.writeFileSync(
    './texts/Created_File.txt',
    `This is the result:\n${first}${second}`,
);

//  to append->just add another argument to writeFileSync ie. {flag: 'a'}
fs.writeFileSync(
    './texts/Created_File.txt',
    `This is the result:\n${first}${second}`,
    {flag: 'a'},
);
console.log("Done with this task");
console.log("Starting new one");