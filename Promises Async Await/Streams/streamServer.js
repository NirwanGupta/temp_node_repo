const { createServer } = require('http');
const { createReadStream } = require(`fs`);

//  const stream ko const server ke andar hi lagana hai, agar bahar define kia to localhost nhi chalega

const server = createServer((req,res) => {

    const stream = createReadStream(`../texts/BigFile.txt`,'utf8');

    stream.on(`open`,() => {
        stream.pipe(res);
    })
    stream.on('error',(err) => {
        console.log(err);
    })
})

server.listen(5500,() => {
    console.log("listen");
});