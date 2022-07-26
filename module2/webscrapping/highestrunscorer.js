const request  = require('request');
const jsdom = require("jsdom");

const { JSDOM } = jsdom;


const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/delhi-capitals-vs-kolkata-knight-riders-qualifier-2-1254116/full-scorecard"

request(link,cb);
function cb(error,response,body)
{
    if(error)
    {
        console.log(error);
    }
    else{
        const dom = new JSDOM(body);
        const document  = dom.window.document;
       let batsmenRow = document.querySelectorAll( '.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table');
    //    console.log(batsmenRow.length);
    let mostrun = 0;
    let mostrunscorer = "";
     for(let i = 0;i<batsmenRow.length;i++)
     {
        let rows = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table  tbody tr");
        for(let j = 0;j<rows.length;j++)
        {
            let tds = rows[j].querySelectorAll("td");
            if(tds.length > 4)
            {
                let name = tds[0].textContent;
                
                let run = tds[7].textContent;
                // console.log(name + " scored" + run );
                
                    if(run > mostrun)
                    {
                        mostrun = run;
                        mostrunscorer = name;
                    }
                
                
                
                
            
            }
        }
     }
     console.log("highest run scored" + mostrun);
     console.log("highest run scorer" + mostrunscorer);



    }
}