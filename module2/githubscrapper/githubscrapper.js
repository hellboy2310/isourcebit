const request = require('request');
const fs = require('fs');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://github.com/topics";


request(link,cb);


function cb(error,response,html)
{
 if(error)
 {
    console.error('error:', error); // Print the error if one occurred
 }
 else{
    const dom = new JSDOM(html);
    const document = dom.window.document;

    let topics = document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i = 0 ;i<topics.length;i++)
    {
        let anchorTagAll = topics[i].href;
        // console.log(anchorTagAll);
        let domainLink = "https://github.com/";
        let completeLink = domainLink + anchorTagAll;
        // console.log(completeLink);
        
        request(completeLink,cb2);
    }
 }
  
};

function cb2(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else{
       const dom = new JSDOM(html);
       const document = dom.window.document;
        let insidetopics = document.querySelectorAll('.text-bold.wb-break-word');
        
        // console.log(insidetopics.length);
        
        for(let i = 0;i<8;i++)
        {

            let repositorieslink = insidetopics[i].href;


            // console.log(repositorieslink);
            // request(repositorieslink,cb3);
            
            let domainLink2 = "https://github.com";
            let completeLink2 = domainLink2  + repositorieslink;
            // console.log(completeLink2);


            request(completeLink2,cb3);


            
        }

    }
}

                function cb3(error,response,html)
                {
                    if(error)
                    {
                        console.log(error);
                    }
                    else{
                        const dom = new JSDOM(html);
                        const document = dom.window.document;
                     
                        let issuestag = document.querySelectorAll(".UnderlineNav-item.no-wrap.js-responsive-underlinenav-item.js-selected-navigation-item.selected");
                     for(let i = 0;i<issuestag.length;i++)
                     {
                        let domainLink3 = "https://github.com/";
                        let completeLink3 = domainLink3 + issuestag[i].href;
                        
                     
                    request(completeLink3,cb4);
                    
                    }
                       
                    }
                }

                // Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title
                function cb4(error,response,html)
                {
                    if(error)
                    {
                        console.log(error);
                    }
                    else{
                        const dom = new JSDOM(html);
                        const document = dom.window.document;
                     
                        let issues = document.querySelectorAll(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
                        
                                console.log(issues[0].textContent);
                        
                    }
                }



               
