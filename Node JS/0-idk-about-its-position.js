// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// Node packages like http dont require installation while external packages like lodash require installation

// npm - global command, comes with node
// npm --version

// local dependancy - use it only in this particular project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _ = require('lodash')
// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log('Hello People')



const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request event');
    res.end('Hello World')
})

server.listen(5000,  ()=>{
    console.log('Server Listening on port: 5000.....');
})






