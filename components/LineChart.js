'use client';

import { Line } from 'react-chartjs-2';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi'],
  datasets: [
    {
      label: 'Visites',
      data: [50, 75, 150, 100],
      borderColor: '#38B6FF',
      backgroundColor: '#38B6FF',
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Trafic du site',
    },
  },
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
