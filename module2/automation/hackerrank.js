const puppeteer  = require('puppeteer');

const mail = "cawosad436@aikusy.com";
const pass = "ush@_1234"

// .fl-button-wrap.fl-button-width-auto.fl-button-left  a
let broswerPromise = puppeteer.launch({headless:false});

let page;

broswerPromise.then(function(browser){
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){

    page = pageInstance;
    let urlPromise = page.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function(){
    let waitPromise = page.waitForSelector("ul.menu a");
    return waitPromise;
}).then(function(){
    let clickPromise = page.click("ul.menu a");
    return clickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector(".fl-button-wrap.fl-button-width-auto.fl-button-left ");
    return waitPromise;
}).then(function(){
    let clickPromise = page.click(".fl-button-wrap.fl-button-width-auto.fl-button-left  a");
    return clickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function(){
    let clickPromise =  page.click("#input-1");
    return clickPromise;
}).then(function(){
    let mailTypedPassword = page.type('#input-1',mail,{delay : 100});
    return mailTypedPassword;
}).then(function(){
    let passtype = page.type("#input-2",pass,{delay:100});
    return passtype;
}).then(function(){
    let logintype  = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return logintype;
}).then(function(){
    let waitPromise = page.waitForSelector('div[data-automation="algorithms"]');
    return waitPromise;
}).then(function(){
    let clickPromise = page.click('div[data-automation="algorithms"]');
    return clickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector('input[value = "warmup"] ');
    return waitPromise;
}).then(function(){
    let clickSelector  = page.click('input[value = "warmup"] ');
    return clickSelector;
}).then(function(){
    return waitForSelector(".pull-left.inline-block .challengecard-title");
})


// ui-btn ui-btn-normal primary-cta ui-btn-line-primary ui-btn-styled
// ui-btn ui-btn-normal primary-cta ui-btn-line ui-btn-styled