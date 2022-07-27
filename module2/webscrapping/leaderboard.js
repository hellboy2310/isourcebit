// .ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent a .ds-text-compact-xs.ds-font-medium

 const request = require('request');
const jsdom = require("jsdom");

const { JSDOM } = jsdom;


const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(link,cb);

function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScoredCardTags = document.querySelectorAll(".ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent .ds-inline-flex.ds-items-center.ds-leading-none a");
        console.log(allScoredCardTags.length);
        for(let i = 2;i<allScoredCardTags.length;i = i + 4)
        {
        let link =  allScoredCardTags[i].href;
        
            let completelink = "https://www.espncricinfo.com" + link;
            request(completelink,cb2);
        }
    }
}

function cb2(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenRow = document.querySelectorAll( '.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table');
        //    console.log(batsmenRow.length);
        
         for(let i = 1;i<batsmenRow.length;i++)
         {
    
            let rows = batsmenRow[i].querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table  tbody tr");
            for(let j = 0;j<rows.length;j++)
            {
                
    
                let tds = rows[j].querySelectorAll(" td ");
                if(tds.length > 4)
                {
                    let name = tds[0].textContent;
                    let runs = tds[2].textContent;
                    let balls = tds[3].textContent;
                    let fours = tds[5].textContent;
                    let sixes = tds[6].textContent;
                  
        console.log("Name:",name,"Runs :",runs,"Balls:",balls,"Fours :",fours,"Sixes: ",sixes);
          
                      
     
                    }
            }
         }
    }

}

