const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end('Welcome')
// })

// Using Event Emitter App

const server = http.createServer()
// emit request event
// subscribe to it / listen for it / respond to it
server.on('request', (req,res)=>{
    res.end('Welcome')
})

server.listen(5000)