const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req);
    if(req.url === '/'){
    // res.write('Welcome to our home page')
    res.end('Welcome to our Home Page')
    }
    // else if(req.url === '/about'){
    //     res.end('Here is our short history')
    // }
    else{
        res.end(
        `<h1>OOPS!</h1>
        <p>We can't seem to find the page you are looking for </p>
        <a href = "/">back home</a>`
    )
    }
    // res.end()
})

server.listen(5000)
