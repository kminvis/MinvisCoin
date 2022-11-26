import React from 'react';
import Price from '../../scrap/information_scrap'
import Trade from '../../scrap/trading'
import Coin from './information'
import Chart from '../chart/BTC_Chart'

function BTC() {
  return (
    <main className='chart_page'>
      <Coin coin="비트코인" />
      <Chart />
      <Price coin="BTC"/>
      <Trade />
    </main>
  );
}

export default BTC;
