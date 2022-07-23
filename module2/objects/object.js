let obj  = {};
console.log(obj);

let objBhavesh = {
    Name:"bhavesh Purohit",
    age :"20",
    Friends:["hellboy","natasha","christie"],
    address :{
        city :"brisbane",
        state :"queensland"
    },
    sayHi:function(){
        console.log("say heloo");
    }

}
console.log(objBhavesh);
objBhavesh.sayHi();

console.log(objBhavesh.address.city);
console.log(objBhavesh.Friends[0]);
console.log(objBhavesh.Friends);
console.log(objBhavesh.address);

objBhavesh.Movies = ['capamerica','spiderman','lucy'];
console.log(objBhavesh);
console.log(objBhavesh['Name']);