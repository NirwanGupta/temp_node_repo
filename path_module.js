const path = require('path');

//  platform specific seperator
console.log(path.sep);

//  Join sequence and returns a normalized resulting path
console.log(path.join('/texts','content'));

//  get absolute path
console.log(path.resolve(__dirname,'text','content'));