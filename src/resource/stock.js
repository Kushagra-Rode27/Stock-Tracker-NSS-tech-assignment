import {iex} from'../config/iex.js';
export const Stock = {

    lat_price:(ticker,callagain)=>{
        const url = `${iex.baseURL}/stock/${ticker}/intraday-prices?token=${iex.apiToken}`
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            callagain(Stock.formatData(data))
    })
        
    },
    Prev_price:(ticker,callagain)=>{
    
        fetch(Stock.getlastUrl(ticker))
        .then((response) => response.json())
        .then((data2)=> {
            callagain(Stock.formatData(data2))
        })
   
    },
    
    getlastUrl:(ticker) =>{
        return `${iex.baseURL}/stock/${ticker}/previous?token=${iex.apiToken}`
    },
    

    formatData: (data) =>{ 
        var sdata;
        if(data.length !== undefined){
             sdata = data[data.length-1]
        }
        else{
             sdata = data
        }
        const formatteddata = {}
        formatteddata.price = sdata.close
        formatteddata.date = sdata.date
        formatteddata.time = sdata.label
        return formatteddata;
    },
    
    
   
    
}
