const { createReadStream } = require(`fs`);

stream = createReadStream(`../texts/BigFile.txt`, {
    highWaterMark: 30000,
    encoding: 'utf8',
});

//  defaulr: 64 bit
//  highWaterMark: control size
//  you can add encoding and highWaterMark to createReadStream

//  you can do err and result togrther as well
/*
    stream.on(`data`,(result,err)=>{
        if(err) {
            console.log(err);
            return;
        }
        console.log(result);
    })
*/

stream.on(`data`,(result) => {
    console.log(result);
})

//  string alag alag hi dalni hoti hai dono .on me

stream.on(`error`,(err) => {
    console.log(err);
})