const { log } = require('console');
const os = require('os');

//  Info about the current user;
const user = os.userInfo();
console.log(user);

//  System uptime;
console.log(`System uptime is: ${os.uptime} seconds`);

const currOS = {
    name: os.type(),
    release: os.release(),
    TotalMem: os.totalmem(),
    FreeMem: os.freemem(),
}
console.log(currOS);