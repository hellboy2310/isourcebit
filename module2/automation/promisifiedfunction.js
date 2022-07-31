function promisifiedfunction(){
    return new Promise(function(resolve,reject)
    {
        let a= 1;
        let b = 2;

        if(a == b)
        {
             resolve("equal");
        }
        else{
            reject("unequal");
        }
    })

}


let somePromise = promisifiedfunction();

somePromise.then(function(x){
    console.log(x);
})
somePromise.catch(function(err){
    console.log(err);
})