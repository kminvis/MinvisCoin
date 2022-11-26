import React, { useEffect } from "react";

type PriceProps = {
  coin: string;
};

function Price({coin}: PriceProps) { 
  
  useEffect(() => {
    var SETINTERVAL_COIN = setInterval(()=>{
      MarketCoin(coin);
    },300);
    return () => {
      clearInterval(SETINTERVAL_COIN)
    };
  })

  function MarketCoin(coin: String){
    function setCommas(number: number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const request = new XMLHttpRequest();
    const url = 'https://api.upbit.com/v1/ticker?markets=KRW-'+coin;;
    
    request.open("GET", url, false);
    request.send();
    var obj = JSON.parse(request.responseText);

    let trade_price = document.querySelector<HTMLElement>("#trade_price");
    if(trade_price instanceof Element){
      trade_price.innerHTML = setCommas(obj[0].trade_price) + " KRW"
      if(obj[0].trade_price - obj[0].opening_price <= 0){
        trade_price.style.color = "blue";
      }
    }

    let change_rate = document.querySelector<HTMLElement>("#change_rate");
    if(change_rate instanceof Element){
      change_rate.innerHTML = Math.floor(
        (obj[0].trade_price - obj[0].opening_price) / obj[0].opening_price
        * 10000) / 100 + "%"
        if(obj[0].trade_price - obj[0].opening_price <= 0){
          change_rate.style.color = "blue";
        }
    }

    let change_price = document.querySelector<HTMLElement>("#change_price");
    if(change_price instanceof Element){
      change_price.innerHTML = setCommas(obj[0].trade_price - obj[0].opening_price) + " KRW"
      if(obj[0].trade_price - obj[0].opening_price <= 0){
        change_price.style.color = "blue";
      }
    }

    let opening_price = document.querySelector("#opening_price");
    if(opening_price instanceof Element){
      opening_price.innerHTML = setCommas(obj[0].opening_price) + " KRW"
    }

    let high_price = document.querySelector<HTMLElement>("#high_price");
    if(high_price instanceof Element){
      high_price.innerHTML = setCommas(obj[0].high_price) + " KRW"
      if(obj[0].high_price - obj[0].opening_price <= 0){
        high_price.style.color = "blue";
      }
      
    }

    let low_price = document.querySelector<HTMLElement>("#low_price");
    if(low_price instanceof Element){
      low_price.innerHTML = setCommas(obj[0].low_price) + " KRW"
      if(obj[0].low_price - obj[0].opening_price <= 0){
        low_price.style.color = "blue";
      }
    }

    let acc_trade_volume_24h = document.querySelector("#acc_trade_volume_24h");
    if(acc_trade_volume_24h instanceof Element){
      acc_trade_volume_24h.innerHTML = setCommas(Math.floor(obj[0].acc_trade_volume_24h * 1000) / 1000) + " BTC"
    }

    let acc_trade_price_24h = document.querySelector("#acc_trade_price_24h");
    if(acc_trade_price_24h instanceof Element){
      acc_trade_price_24h.innerHTML = setCommas(Math.floor(obj[0].acc_trade_price_24h)) + " KRW"
    }

   }

  
  return <div/>;
}

export default Price;
