
'use client';

import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Chrome', 'Firefox', 'Safari'],
    datasets: [
        {
            label: 'Navigateurs',
            data: [60, 25, 15],
            backgroundColor: [
                '#38B6FF',
                '#FF6384',
                'rgba(151,255,99,0.6)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function PieChart() {
    return <Pie data={data} />;
}
