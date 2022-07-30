const pupeeteer = require('puppeteer');

let broswerPromise = pupeeteer.launch({headless:false});

broswerPromise.then(function(browser){
    let pagePromise  = browser.newPage();
    return pagePromise;
}).then(function(page){
    let urlPromise = page.goto("https://www.google.com/");
   
    return urlPromise;
  
}).then(function(){
    console.log("google is opened");
})