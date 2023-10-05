//  async = non-blocking code
//  sync = blocking code

//  sync approach takes more time in comparision to the async
//  if more users are using the application at a time, then with sync approach - node will serve only one user not all

const { readFile, writeFile } = require(`fs`);

console.log(`Start`);
//  ek ke andar ek karne hai taaki agar first file read karne me hi error aa jae to vhi rok do
//  sab sync wale jaisa hai bas ek (err, result) wala argument har ek me pass karna hai

//  In async the moment we start the task we offload this task and continue the rest of the code
//  while in the sync approach we have to implement all the code -> line by line
//  Thus async is faster
readFile(
    `./texts/first.txt`,
    `utf8`,
    (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const first = result;

        readFile(
            `./texts/second.txt`,
            `utf8`,
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                const second = result;

                writeFile(
                    `./texts/Created_File.txt`,
                    `This is the result:\n${first}${second}`,
                    (err, result) => {
                        if(err) {
                            console.log(err);
                            return;
                        }
                        console.log("Done with this task");
                    }
                )
            }
        )
    }
)
console.log("Starting new one");