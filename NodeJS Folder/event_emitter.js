const eventEmitter = require(`events`);

const customEventEmitter = new eventEmitter();

//  if emitted here -> no .on will run
customEventEmitter.on('response',(name,id) => {
    console.log(`data received name: ${name} id: ${id}`);
})

//  if emitted here -> only first .on will work
customEventEmitter.on(`response`,() => {
    console.log(`Another logic`);
})

//  now both of these will work
customEventEmitter.emit(`response`,`Nirwan`,2202);