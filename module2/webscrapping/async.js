const fs = require("fs");
const { request } = require('http');

console.log("before");

fs.readFile("f1.txt",cb1);
fs.readFile('f2.txt',cb2);


function cb1(error,data)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data + "");
    }
}


function cb2(error,data)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data + " ");
    }
}


console.log("after");