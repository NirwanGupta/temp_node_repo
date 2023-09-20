const { writeFile, appendFile } = require('fs');


function append(i) {
    return new Promise((resolve, reject) => {
        appendFile(
            `./texts/BigFile.txt`,
            `Hello guys ${i}\n`,
            (error) => {
                if(error)
                {
                    console.log(error,"\n");
                    return;
                }
            }
        );
    })
}

async function start(i) {
   await append(i);
}

for(let i=0; i<1000; i++) {
    start(i);
}

/*
appendFile(
        `./texts/BigFile.txt`,
        `Hello guys ${i}\n`,
        (error) => {
            if(error)
                console.log(error,"\n");
        }
    );
    */