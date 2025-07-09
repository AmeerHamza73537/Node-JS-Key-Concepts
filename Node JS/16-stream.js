const { createReadStream } = require('fs')

// const stream = createReadStream('./content/big.txt')
// define 64kb, the size of buffer is 64KB
// last buffer - reminder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt',{highWaterMark: 90000})
const stream = createReadStream('./content/big.txt',{encoding: 'utf8'})


stream.on('data', (result)=>{
    console.log(result);
})
stream.on('error', (err)=>console.log(err))