// If you want to create something custom, you will need to extend the class OR you simply want to emit an event as well as listen for it
// then you can just create the instance

// CustomEmitter -- this is an object we created which now have 2 most commonly use methods:
// ON -- LISTEN FOR AN EVENT
// EMIT -- EMIT AN EVENT

// Things to be aware of:
// 1-We can have as many methods as we want
// 2-The order in which you emit methods matters -- if emit is writtern before .on then we got nothing in console
// 3- We can pass the arguments when we are emitting the event

const EventEmitter = require('events')

const CustomEmitter = new EventEmitter()
// The strings in .on and .emit should match like in this example we have 'response'
// on and emit methods
// Keep track of the order
// Additional arguments
// built in modules utilize it

CustomEmitter.on('response', (name, id)=>{
    console.log(`data received ${name} ${id}`);
})
CustomEmitter.emit('response', 'john', 34)