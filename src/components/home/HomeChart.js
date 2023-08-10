import React from 'react';
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

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export const data = {
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
};

function HomeChart() {
  return (
    <div className='main-chart-container'>
      <Line options={options} data={data} />
    </div>
  );
}

export default HomeChart;