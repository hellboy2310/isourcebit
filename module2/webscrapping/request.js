const request = require('request');

const link = '';

request(link, cb) ;

function cb (error, response, body){
    if(error)
    {
        console.error('error:', error); // Print the error if one occurred
    }  
    else{
        console.log('body:', body); // Print the HTML for the Google homepage.
    }   
      
    
}

  
