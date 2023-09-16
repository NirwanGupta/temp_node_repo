const { log } = require("console");
const http = require(`http`);


const server = http.createServer((req, res) => {
    if(req.url == `/`) {
        res.end(`This is our home page`);
    }
    else if(req.url == '/about') {
        for(let i=0; i<100; i++) {
            for(let j=0; j<1000; j++) {
                console.log(i,' ',j);
            }
        }
        res.end(`about page`); 
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
