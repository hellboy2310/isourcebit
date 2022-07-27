const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = 'https://www.espncricinfo.com/series/ipl-2021-1249214/delhi-capitals-vs-kolkata-knight-riders-qualifier-2-1254116/full-scorecard';


request(link,cb);


function cb(error,response,html){
    if(error)
    {
        console.error('error:', error); // Print the error if one occurred
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let playerdetail  = document.querySelectorAll(".ds-border-b.ds-border-line.ds-text-tight-s td .ds-inline-flex.ds-items-center.ds-leading-none a ");
        //   console.log(playerdetail.length);

        for(let i = 0;i<playerdetail.length ;i++)
        {
            let playerlink  = playerdetail[i].href;
            let domainlink = "https://www.espncricinfo.com/";
            let completelink = domainlink + playerlink;

            // console.log(completelink);

           request(completelink,cb2);

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
        let playerbirthdate = document.querySelectorAll(".ds-text-title-s.ds-font-bold.ds-text-ui-typo");
        console.log(playerbirthdate[0].textContent);
        console.log(playerbirthdate[1].textContent);
        
        
    }
}

