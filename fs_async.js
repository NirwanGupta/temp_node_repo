//  method 3
//  meyhod 3 is the beat method
const {readFile, writeFile} = require(`fs`).promises;

const start = async() => {
    try {
        const first = await readFile(`./texts/first.txt`,`utf8`);
        const second = await readFile(`./texts/second.txt`,`utf8`);
        writeFile(
            `./texts/Created_File.txt`,
            `This is created ${first}${second}`,
            {flag: `a`},
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();

//  promises in fs module is same as promisify in util module


//  method 2
/*const {readFile, writeFile} = require(`fs`);
const util = require(`util`);

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFilePromise(`./texts/first.txt`,`utf8`);
        const second = await readFilePromise(`./texts/second.txt`,`utf8`);
        writeFilePromise(
            `./texts/Created_File.txt`,
            `This is created ${first}${second}`,
            {flag: `a`},
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();*/


//  method 1 
// const {readFile, writeFile} = require(`fs`);
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path,`utf8`, (err, data) => {
//             if(err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

// const start = async() => {
//     try {
//         const first = await getText(`./texts/first.txt`);
//         const second = await getText(`./texts/second.txt`);
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();