'use client';

import FetchSensorDataById from '@/utils/FetchSensorDataById';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    RadarController,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    RadarController,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip
);

const RadarChartComponent = (props) => {
    const { deviceId } = props;
    const { data: dataSensor, isLoading: isLoadingStatus } = FetchSensorDataById(deviceId);
    const usefulData = dataSensor?.slice(0, 10);

    const labels = usefulData.map((data) => data?.sensorTimestamp.slice(11, 16));

    return (
        <div className='border p-2 flex flex-col justify-center items-center'>
            <h2 className='text-center'>{deviceId}</h2>
            <span className='text-sm text-slate-400'>
                {usefulData[0]?.sensorTimestamp.slice(0, 10)}
            </span>
            <Radar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: usefulData.map((data) => data?.sensorData),
                            label: 'Sensor Data', // Label for the dataset
                            borderColor: 'orange',
                            backgroundColor: 'rgba(255, 165, 0, 0.3)', // Transparent orange fill
                            borderWidth: 2, // Border width
                        },
                    ],
                options: {
                    scales: {
                        r: {
                            suggestedMin: 0, // Minimum scale value
                            suggestedMax: 100, // Maximum scale value
                        },
                    },
                },
            }}
            />
        </div>
    );
};

export default RadarChartComponent;
