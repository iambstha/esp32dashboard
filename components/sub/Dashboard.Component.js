'use client'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ModelDashComponent from './subsub/ModelDash.Component'

const DashboardComponent = () => {
    const [dataMQ135, setDataMQ135] = useState([])
    const [dataHCSR04, setDataHCSR04] = useState([])
    const [dataDS18B20, setDataDS18B20] = useState([])

    useEffect(() => {
        const fetchData = async (deviceId) => {
            try {
                let response = await fetch(`http://localhost:8080/v1/api/sensors/sensors?deviceId=${deviceId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await response.json();
                let truncatedData = data.data;
                switch (deviceId) {
                    case 'MQ-135':
                        setDataMQ135(truncatedData)
                        break;

                    case 'HC-SR04':
                        setDataHCSR04(truncatedData)
                        break;

                    case 'DS18B20':
                        setDataDS18B20(truncatedData)
                        break;
                    default:
                        break;
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData('MQ-135');
        fetchData('HC-SR04');
        fetchData('DS18B20');
    }, []);

    // console.log(dataMQ135);
    // console.log(dataHCSR04);
    // console.log(dataDS18B20);

    return (
        <div className=' w-full '>
            <h1 className=' font-semibold text-xl pb-4 '>Dashboard</h1>
            <div className='w-full'>
                <div className='grid grid-cols-3 gap-3'>
                    <ModelDashComponent
                        imageLocation='/icons/temperature-sensor.png'
                        measure='Temperature'
                        measureUnit='Celcius'
                        measureSymbol='&deg;C'
                        val={dataDS18B20} />
                    <ModelDashComponent
                        imageLocation='/icons/car.png'
                        measure='Distance'
                        measureUnit='Kilometer'
                        measureSymbol='km'
                        val={dataHCSR04} />
                    <div className="row-span-2 bg-white p-4">Cell 3</div>
                    <ModelDashComponent
                        imageLocation='/icons/humidity.png'
                        measure='Humidity'
                        measureUnit='gm per m^3'
                        measureSymbol='gm per m^3'
                        val={dataMQ135} />
                    {/* <ModelDashComponent
                        imageLocation='/icons/carbon-monoxide.png'
                        measure='Air Quality'
                        measureUnit='ppm'
                        measureSymbol='ppm'
                        val={dataDS18B20} /> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent