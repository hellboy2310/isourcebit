const puppeteer = require('puppeteer');


let browserPromise = puppeteer.launch({headless:false});//promise mila he ki browser open hoga headless false ki wajah se hi browser open hua he



browserPromise.then(function(browser){
    console.log("browser is opened");
    let pagePromise  = browser.newPage();
    return pagePromise;
}).then(function(page){
    let urlPromise = page.goto('https://www.google.com/');
    return urlPromise;
}).then(function(){
    console.log('google is opened');
})