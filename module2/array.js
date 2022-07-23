let arr = [];
console.log(arr);


//array with elements
let elearr = [1,2,3,4,5,"hello i am strring",false];
console.log(elearr);

elearr[2] = "bhavesh";
console.log(elearr);

// push method
console.log("array before push :",elearr);
elearr.push("new item");
console.log("array before after :",elearr);

//pop
console.log("Array before pop",elearr);
elearr.pop();
console.log("array after popping",elearr);

//shift
console.log("Array before shift",elearr);
elearr.shift();
console.log("array after shift",elearr);



//unshift

console.log("Array before unshift",elearr);
elearr.unshift("newly added item");
console.log("array after unshift",elearr);



//length
let len = elearr.length;
console.log(len);