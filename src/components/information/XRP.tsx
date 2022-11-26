import React from 'react';
import Price from '../../scrap/information_scrap'
import Coin from './information'
import Chart from '../chart/XRP_Chart'

function XRP() {
  return (
    <main className='chart_page'>
      <Coin coin="리플" />
      <Chart />
      <Price coin="XRP"/>
    </main>
  );
}

export default XRP;