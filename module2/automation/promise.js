 const fs = require('fs');

console.log("before");


let f1kapromise = fs.promises.readFile('f1.txt');
console.log(f1kapromise);
let f2kapromise  = fs.promises.readFile('f.txt');
console.log(f2kapromise);

f1kapromise.then(function(data){
    console.log(data + "");
})

f1kapromise.catch(function(error){
    console.log(error + " ");
})


f2kapromise.then(function(data){
    console.log(data + " ");
})
f2kapromise.catch(function(error){
    console.log(error + " ");
})




console.log("after");
