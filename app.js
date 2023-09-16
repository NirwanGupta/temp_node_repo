const { log } = require("console");
const http = require(`http`);

setInterval(() => {
    // `<h6>Hello Worlds</h6>`
    console.log(`hello`);
}, 1000);

const server = http.createServer((req, res) => {
    if(req.url == `/`) {
        res.end(`This is our home page`);
    }
    else if(req.url == '/about') {
        res.end(`This is the about page`);
    }
    else {
        res.end(
            `<h1>ERROR 404 - Not Found<h1><p></p>
            <a href='/'>Home page</a>`
        )
    }
})

server.listen(5500, () => {
    console.log(`Server listening on port: 5500....`);
})
