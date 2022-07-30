let fs = require('fs');

let f1kapromise = fs.promises.readFile('f1.txt');

f1kapromise.then(function(data){
    console.log(data +  " ");
    let f2kapromise = fs.promises.readFile('f2.txt');
    return f2kapromise;
}).then(function(data){
console.log(data +  " ");
}).then(function(error){
    console.log(data + " ");
})



