let quoteBtn = document.querySelector(".btn");
quoteBtn.addEventListener('click',getQuote);
const lnk = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote()
{
    try{
        const resp = await fetch(lnk)
        if(!resp.ok)
        {
            throw Error(resp.statusText)
        }
        const json = await resp.json();
        dispQuote(json.message);
    }
    catch(err){
        console.log(err)
        document.write("Failed to retrieve the data");
    }
}
function dispQuote(quote)
{
    document.querySelector(".quoteText").textContent = quote;
}