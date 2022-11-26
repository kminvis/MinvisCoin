import React from 'react';
import Price from '../../scrap/information_scrap'
import Coin from './information'
import Chart from '../chart/ETH_Chart'

function ETH() {
  return (
    <main className='chart_page'>
      <Coin coin="이더리움" />
      <Chart />
      <Price coin="ETH"/>
    </main>
  );
}

export default ETH;
