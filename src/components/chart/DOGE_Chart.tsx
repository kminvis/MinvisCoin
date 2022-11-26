import React from 'react';
import './Chart.css'

export const Chart = () => {

  const iframePart = () => {
    return {
      __html: '<iframe src="DOGE_Chart.html" width="100%" height="100%"></iframe>',
    };
  };

  return (

    <div className='chart_box'>
      <div
        style={{ margin: 'auto', position: 'relative', width: '100%', height: '100%' }}
        dangerouslySetInnerHTML={iframePart()}
      />
    </div>
  );
}
  
  export default Chart;