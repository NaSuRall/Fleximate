// components/BarChart.js
'use client';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril'],
    datasets: [
        {
            label: 'Ventes',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
    ],
};

// Options du graphique
const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Graphique des ventes' },
    },
};

export default function BarChart() {
    return <Bar options={options} data={data} />;
}