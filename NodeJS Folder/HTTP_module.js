const http = require(`http`);


//  if you get error using if if ... then switch to if else if else

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end(`This is our home page`);
    }
    else if(req.url === '/about') {
        res.end(`Welcome this is our about page`);
    }
    else
    {
        res.end(`
            <h1>ERROR 404</h1>
            <p>Please check your request</p>
            <a href="\">HOME</a>
        `)
    }
})
server.listen(5500); 