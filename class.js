//Request comes from C++
//to run a node application you do node *file name*
// const http = require('http'); //This http is an object
//press control c on terminal so you can run code

// const server = http.createServer((request, response)=>{

//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain')
//     response.end('Hello World')

// });

// server.listen(5000, ()=>{
//     console.log('Running on port 5000')
// });

//Building a 2 page site with no HTML just pure Node

const http = require('http');

const server = http.createServer((request, response)=>{
    switch(request.url){

        case '/':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain')
            response.end('Home page')
            break;
        case '/aboutUs':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain')
            response.end('About us page')
            break;
        default:
            response.statusCode = 404;
            response.end('Page not found');

 
    }
});
server.listen(5000, ()=>{
        console.log('Running on port 5000')
    });
    