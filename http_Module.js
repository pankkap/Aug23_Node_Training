// Requiring/Importing the http Module
const http = require('http')
const fs = require('fs')
const path = require('path')

// We are creating a Server Object
const server = http.createServer((req, res)=>{
    
    const url = req.url;
    console.log(url)

    // Finding the Route | Address | url
    if(url ==="/")
    {
        res.write("Hi Welcome to Server")
        res.write("I am Home Route")
        res.end()
    }
    if(url ==="/about")
    {
        res.write("<html>")
        res.write("<head><title>Home Page</title></head>")
        res.write("<body><h2>Hi This is About Page</h2> </body>")
        res.write("</html>")

        res.end()
    }

    if(url ==="/contact"){

        const htmlCode = fs.readFileSync(path.join(__dirname, "/about.html"), "utf-8")
        res.end()
    }
    else
    {
        res.write("Page not Found")
        res.end()
    }
})

// Listen Server on a Port
server.listen(5000, ()=>{
    console.log("Node Server running on Port 5000")
})