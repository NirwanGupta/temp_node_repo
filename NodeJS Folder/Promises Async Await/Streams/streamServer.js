const { createServer } = require('http');
const { createReadStream } = require(`fs`);

//  const stream ko const server ke andar hi lagana hai, agar bahar define kia to localhost nhi chalega

const server = createServer((req,res) => {

    const stream = createReadStream(`../texts/BigFile.txt`,'utf8');

    stream.on(`open`,() => {
        stream.pipe(res);
    })

    //  error ke lie alag se stream.on banana hota hai varna agar sath me kro to tera code asal me hi error de dega
    //  string alag alag hi dalni hoti hai dono .on me

    stream.on('error',(err) => {
        console.log(err);
    })
})

server.listen(5500,() => {
    console.log("listen");
});