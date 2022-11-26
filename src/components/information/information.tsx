import React from 'react';
import './information.css'

type CoinProps = {
    coin: string;
  };

function Information({coin}: CoinProps) {
  return (
    <main className='chart_page'>
      <div className='coin'>
        <div className='Information'>
          <h1 className='coin_name'>{coin}</h1>
          <div className='Information_curyes'>
          <div id="trade_price" className='Information_current'></div>
          <div className='table_name1'>전일대비</div>
          <div id="change_rate" className='Information_yesterdat'></div>
          <div id="change_price" className='Information_yesterdat'></div>
          </div>
          <table className='Information_table'>
            <tr>
                <td className='table_name'>시가</td>
                <td id="opening_price"></td>
                <td className='table_name'>고가</td>
                <td id="high_price" className='highlow'></td>
                <td className='table_name'>거래량(24h)</td>
                <td id="acc_trade_volume_24h"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td className='table_name'>저가</td>
                <td id="low_price" className='highlow'></td>
                <td className='table_name'>거래대금(24h)</td>
                <td id="acc_trade_price_24h"></td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Information;