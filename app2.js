
const http = require('http');

// const fs = require('fs') //its an object like http

// let fileContent = "lorem ipsum dolor...."

// fs.writeFile("ourFile.txt", fileContent, (error) => {
//     if(error){
//         console.log(error.message);
//         return;
//     }
//     console.log("File was saved ourFile.txt");
// })

// let fileName = "./test.html";

// fs.readFile(fileName, (error, buffer) => {
//     if(error){
//         console.error(error.message);
//         return;
//     }
//     console.log(buffer.toString());
    
// });

let myServer = http.createServer((request, response)=>{
    //here where code goes to send back to user
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Hello world</h1>')

});

myServer.listen(3000, () => {
    console.log("listening on port 3000");
    
})


// myServer.listen(3000, ()=>{
//     console.log('Listening on port 3000');
// })