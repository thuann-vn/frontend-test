import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      display: false,
      grid: {
        display: false, // Set this to false to remove y-axis grid lines
      },
    },
  },
  plugins: {
    legend: {
      position: 'top',
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

function RecordChart() {
  const [selectedLegend, setSelectedLegend] = React.useState('year'); // year, month, week, day
  const [data, setData] = React.useState();
  const legends = [
    {
      'name': 'day',
      'label': '日'
    },
    {
      'name': 'week',
      'label': '週'
    },
    {
      'name': 'month',
      'label': '月'
    },
    {
      'name': 'year',
      'label': '年'
    }
  ]

  //Load data when legend is changed
  useEffect(() => {
    const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];
    setData({
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => Math.floor(Math.random() * 100)),
          borderColor: '#FFCC21',
          backgroundColor: '#FFCC21',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => Math.floor(Math.random() * 100)),
          borderColor: '#8FE9D0',
          backgroundColor: '#8FE9D0',
        },
      ],
    })
  }, [selectedLegend])


  const dateStr = moment().format('YYYY.MM.DD');
  return (
    <div className='record-chart-container'>
      <div className='record-chart-title'><span>BODY<br />RECORD</span> {dateStr}</div>
      <div className='record-chart'>
        {data ? <Line options={options} data={data} /> : null }
      </div>
      <div className='chart-legends'>
        {legends.map((legend, index) => {
          return <div className='legend-button'>
            <button className={selectedLegend === legend.name ? 'selected' : ''} onClick={() => setSelectedLegend(legend.name)}>{legend.label}</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default RecordChart;