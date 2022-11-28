import React from 'react';
import Price from '../../Api/information'
import Coin from './information'
import Chart from '../chart/BTC_Chart'

function Python() {
  return (
    <main className='chart_page'>
      <Coin coin="비트코인" />
      <Chart />
      <Price coin="BTC"/>
    </main>
  );
}

export default Python;
