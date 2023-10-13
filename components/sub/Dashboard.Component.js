'use client'
import React, { useState, useEffect } from 'react';
import ModelDashComponent from './subsub/ModelDash.Component';
import FetchSensorDataById from '@/utils/FetchSensorDataById';

const DashboardComponent = () => {
    const { data: dataMQ135, isLoading: isLoadingMQ135 } = FetchSensorDataById('MQ-135');
    const { data: dataHCSR04, isLoading: isLoadingHCSR04 } = FetchSensorDataById('HC-SR04');
    const { data: dataDS18B20, isLoading: isLoadingDS18B20 } = FetchSensorDataById('DS18B20');

    return (
        <div className=' w-full '>
            <h1 className=' font-semibold text-xl pb-4 '>Actuator Dashboards</h1>
            <div className='w-full'>
                <div className='grid grid-cols-3 gap-3'>
                    <ModelDashComponent
                        imageLocation='/icons/temperature-sensor.png'
                        measure='Temperature'
                        measureUnit='Celcius'
                        measureSymbol='&deg;C'
                        val={dataDS18B20} />
                    <ModelDashComponent
                        imageLocation='/icons/humidity.png'
                        measure='Humidity'
                        measureUnit='Parts per milliom'
                        measureSymbol='ppm'
                        val={dataMQ135} />
                    <div className="row-span-2 bg-white p-4">Cell 3</div>
                    <ModelDashComponent
                        imageLocation='/icons/car.png'
                        measure='Distance'
                        measureUnit='Kilometer'
                        measureSymbol='km'
                        val={dataHCSR04} />
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