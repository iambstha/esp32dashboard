'use client';

import FetchSensorDataById from '@/utils/FetchSensorDataById';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    BarController,
    BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    Tooltip
);

const BarChartComponent = (props) => {
    const { deviceId } = props;
    const { data: dataSensor, isLoading: isLoadingStatus } = FetchSensorDataById(deviceId);
    const usefulData = dataSensor?.slice(0, 100);
    const labels = usefulData.map((data) => data?.sensorTimestamp.slice(11,16));

    return (
        <div className='  border p-2 flex flex-col justify-center items-center '>
            <h2 className=' text-center '>{deviceId}</h2>
            <span className=' text-sm text-slate-400 '>{usefulData[0]?.sensorTimestamp.slice(0,10)}</span>
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: usefulData.map((data) => data?.sensorData),
                            backgroundColor: 'orange',
                        },
                    ],
                    options: {
                        scales: {
                            x: {
                                type: 'category',
                            },
                            y: {
                                beginAtZero: true,
                            },
                        },
                        layout: {
                            padding: {
                                left: 10,
                                right: 10,
                            },
                        },
                    }
                }}
            />
        </div>
    )
}

export default BarChartComponent