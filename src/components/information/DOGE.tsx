import React from 'react';
import Price from '../../scrap/information_scrap'
import Coin from './information'
import Chart from '../chart/DOGE_Chart'

function DOGE() {
  return (
    <main className='chart_page'>
      <Coin coin="도지코인" />
      <Chart />
      <Price coin="DOGE"/>
    </main>
  );
}

export default DOGE;