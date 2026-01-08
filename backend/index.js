// const x=12;
// const y=13;

// console.log("first js code")

// function greet(name){
//     return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));

// function multiply(a,b){
//     return a*b;
// }

// const c=multiply(4,5);
// console.log(c)

// const add=(a,b)=>{ a+b; }
// console.log(add(3,4));

// console.log(add(3,4))    
// const add=(x,y)=> x+y;
// console.log(add(5,6))

// const fs=require('fs')

// console.log("start")
// const data=fs.readFileSync('data.txt','utf-8');  //blocking output sequence maintain
// console.log(data)
// console.log("end")


// fs.readFile('data.txt','utf-8',(err,data)=>{  //non-blocking-> output sequence can differ
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });




// console.log("end")



// import express from 'express';
// import connectToMongoDB from './mongoDB/mongoDB.js';

// const app=express();

// app.get("/",(req,res)=>{
//     res.send("<h1> Hello World</h1>");
// });

// app.listen(3000,()=>{
//     console.log("Server running on port: http://localhost:3000/");
//     connectToMongoDB();
// });

  

// import http from 'http';
// import { URL } from 'url';

// const server = http.createServer((req, res) => {
//     const parsedURL = new URL(req.url, `http://${req.headers.host}`);

//     if (parsedURL.pathname === "/" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Hello students</h1>");
//     } else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end("<h1>Page not found</h1>");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });

const add=(a,b)=> a+b;
console.log(add(7,8));
