import LineChartComponent from '@/components/charts/LineChart.Component';
import RadarChartComponent from '@/components/charts/RadarChart.Component';


const MyChart = () => {

    return (
        <div className=' leading-8 w-full flex flex-col justify-start mt-[250px] '>
            <h2 className='p-4 text-lg w-full font-semibold '>Charts</h2>
            <div className='  w-full h-full flex flex-wrap justify-start p-4 gap-4 items-start py-4'>
                <LineChartComponent deviceId='MQ-135' />
                <LineChartComponent deviceId='HC-SR04' />
                <LineChartComponent deviceId='DS18B20' />
            </div>
            <div className='  w-full h-full flex flex-wrap justify-start p-4 gap-4 items-start py-4'>
                <RadarChartComponent deviceId='MQ-135' />
                <RadarChartComponent deviceId='HC-SR04' />
                <RadarChartComponent deviceId='DS18B20' />
            </div>
        </div>
    );
};

export default MyChart;
