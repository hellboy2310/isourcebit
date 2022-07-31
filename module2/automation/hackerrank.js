const puppeteer  = require('puppeteer');
const mail = "gajenew897@logodez.com";
const pass = "ush@_1234"
const code = require("./code")
// .fl-button-wrap.fl-button-width-auto.fl-button-left  a
let broswerPromise = puppeteer.launch({headless:false, defaultViewport:null, args:['--start-fullscreen']});

 let page;

broswerPromise.then(function(browser){
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){

    page = pageInstance;
    let urlPromise = page.goto("https://www.hackerrank.com/");
    return urlPromise;
})
.then(function(){
return waitAndClick("ul.menu a");
    //     let waitPromise = page.waitForSelector("ul.menu a");
//     return waitPromise;
// }).then(function(){
//     let clickPromise = page.click("ul.menu a");
//     return clickPromise;
})
.then(function(){
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
})
.then(function(){
//     let waitPromise = page.waitForSelector('div[data-automation="algorithms"]');
//     return waitPromise;
// }).then(function(){
//     let clickPromise = page.click('div[data-automation="algorithms"]');
//     return clickPromise;
return waitAndClick('div[data-automation="algorithms"]');
})
.then(function(){
//     let waitPromise = page.waitForSelector('input[value = "warmup"] ');
//     return waitPromise;
// }).then(function(){
//     let clickSelector  = page.click('input[value = "warmup"] ');
//     return clickSelector;
return waitAndClick('input[value = "warmup"] ');
})
.then(function(){
    let waitPromise = page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
        return waitPromise;
}).then(function(){
    //evaluate ke andar console karogge to browser pe jaake run karega
    let arrPromise = page.evaluate(function(){

        let arr = [];
        let aTags = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');
        for(let i = 0;i<aTags.length;i++)
        {
            let link = aTags[i].href;
            arr.push(link);
            
        }
        return arr;
    })

    return arrPromise;
    
}).then(function(questionsarr){
    console.log(questionsarr); 
    questionSolver(questionsarr[0],code.answers[0]);
})

// this is a promisified function

function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();
        })
    })
}


function questionSolver(question,answer)
{
    return new Promise(function(resolve,reject){
        let linkPromise  = page.goto(question);
        linkPromise.then(function(){
            return waitAndClick('.checkbox-wrap');
        }).then(function(){
          return waitAndClick('.input.text-area.custominput.auto-width');          
        }).then(function(){
            return page.type('.input.text-area.custominput.auto-width',answer);
        }).then(function(){
            let holdControl = page.keyboard.down('Control');
            return holdControl;
        }).then(function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function(){
            let pressX = page.keyboard.press('X');
            return pressX;
        }).then(function(){
            let upControl = page.keyboard.up('Control');
            return upControl; 
        }).then(function(){
            return waitAndClick('.challenge-page-wrap.theme-m-content');
        }).then(function(){
            let holdControl = page.keyboard.down('Control');
            return holdControl;
        }).then(function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function(){
            let pressV = page.keyboard.press('V');
            return pressV;
        }).then(function(){
            return waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
        })


    })
}



// ui-btn ui-btn-normal primary-cta ui-btn-line-primary ui-btn-styled
// ui-btn ui-btn-normal primary-cta ui-btn-line ui-btn-styled 

