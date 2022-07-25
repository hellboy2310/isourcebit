const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = 'https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard';

request(link, cb) ;

function cb (error, response, html){
    if(error)
    {
        console.error('error:', error); // Print the error if one occurred
    }  
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
     let teamsname = document.querySelectorAll(".ds-inline-flex.ds-items-center.ds-leading-none .ds-text-tight-l.ds-font-bold");
        console.log(teamsname[0].textContent);
        console.log(teamsname[1].textContent);
        
        
    }   
      
    
}

  
// ds-flex ds-flex-col ds-mt-3 md:ds-mt-0 ds-mt-0 ds-mb-1