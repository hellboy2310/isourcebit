const fs =  require('fs');

fs.readFile('f1.txt',cb);

function cb(error,data)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data + " ");
        fs.readFile('f2.txt',cb2);
    }
}


function cb2(error,data)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data  + " ");
    }
}