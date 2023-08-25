import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import cx from 'classnames';
import style from './demoChart.module.sass';

const DemoChart = () => {
  const chartRef = useRef(null);

  // Dummy
  const generateData = () => {
    const data = [];
    for (let year = 2022; year <= 2023; year++) {
      for (let month = 1; month <= (year === 2022 ? 12 : 8); month++) {
        const value = Math.floor(Math.random() * 1500) + 500;
        data.push({ label: `${year}/${month}`, value: value });
      }
    }
    return data;
  };

  const dataSets = {
    title: 'Monthly Sales Chart',
    datas: generateData(),
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dataSets.datas.map(item => item.label),
        datasets: [{
          label: dataSets.title,
          data: dataSets.datas.map(item => item.value),
          backgroundColor: '#B7D3AB',
          borderColor: '#95C9C3',
          borderWidth: 6
        }]
      },
      options: {
        plugins: {
          tooltip: {
            // https://www.chartjs.org/docs/latest/configuration/tooltip.html
            callbacks: {
              title: (tooltipItems) => {
                return tooltipItems[0].label;
              },
              label: (tooltipItem) => {
                return tooltipItem.formattedValue;
              },
            },
            padding: 10,
            bodyAlign: 'center',
            displayColors: false,
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      newChart.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='simpleTopSpacing'>
      <canvas ref={chartRef} width="100" height="300" className={cx('mt-3 mx-3', style.canvas)}></canvas>
    </div>
  );
};

export default DemoChart;