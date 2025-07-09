// For file module, we can use FS MODULE asynchronously non blocking or synchronously which 
// is blocking

// const { log } = require('console')
const {readFile, writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    // console.log(result);
    const first = result
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this text');
            }
        )
    })
})
console.log('starting next task');

//OUTPUT IN CONSOLE WILL BE
// start
// starting next task
// done with this text
// --- this is an example of asynchronus programming
