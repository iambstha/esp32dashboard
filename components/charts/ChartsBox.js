import React from 'react'
import LineChartComponent from './LineChart.Component';
import RadarChartComponent from './RadarChart.Component';
import BarChartComponent from './BarChart.Component';

const ChartsBox = () => {
    return (
        <div className=' leading-8 w-full flex flex-col justify-start '>
            <h2 className='p-4 text-lg w-full font-semibold '>Charts</h2>
            <div className='  w-full flex flex-wrap justify-start p-4 gap-4 items-start py-4'>
                <BarChartComponent deviceId='MQ-135' />
                <BarChartComponent deviceId='HC-SR04' />
                <BarChartComponent deviceId='DS18B20' />
            </div>
            <div className='  w-full flex flex-wrap justify-start p-4 gap-4 items-start py-4'>
                <RadarChartComponent deviceId='MQ-135' />
                <RadarChartComponent deviceId='HC-SR04' />
                <RadarChartComponent deviceId='DS18B20' />
            </div>
        </div>
    );
}

export default ChartsBox