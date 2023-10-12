'use client'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'

const DashboardComponent = () => {
    const [sensorData, setSensorData] = useState([])
    let deviceId = 'MQ-135'
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:8080/v1/api/sensors/sensors?deviceId=${deviceId}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            console.log(response)
            const data = await response.json();
            console.log(data)
            setSensorData(data);
          } catch (err) {
            console.error('Error fetching data:', err);
          }
        };
    
        fetchData();
      }, [deviceId]);
    
      console.log(sensorData);

    return (
        <div className=' w-full '>
            <h1 className=' font-semibold text-xl pb-4 '>Dashboard</h1>
            <div className='w-full'>
                <div className='grid grid-cols-3 gap-3'>
                    <div className="bg-white p-4 flex w-full shadow-sm hover:shadow-md hover:cursor-pointer h-44 justify-center items-center rounded-lg">
                        <div className='w-3/4 flex flex-col h-full justify-start items-start'>
                            <h2 className=' text-lg font-semibold text-slate-800'><span className=' text-lime-700'>DS18B20</span>   <span className='text-slate-300 text-sm'>(Temperature sensor)</span></h2>
                            <ul className=' flex flex-col h-full justify-center '>
                                <li className=' flex flex-col my-2'>
                                    <span className='text-sm text-slate-400'>Celsius</span>
                                    <span className='text-2xl text-slate-600'>42&deg;C</span>
                                </li>
                                <li className=' flex flex-col'>
                                    <span className='text-sm text-slate-400'>Fahrenheit</span>
                                    <span className='text-2xl text-slate-600'>107.6&deg;F</span>
                                </li>
                            </ul>
                        </div>
                        <div className='w-1/4'>
                            <Image src='/icons/temperature-sensor.png' alt='proximity-sensor-image' width={100} height={100} className=' opacity-60 hover:opacity-100' />
                        </div>
                    </div>
                    <div className="bg-white p-4 flex w-full shadow-sm hover:shadow-md hover:cursor-pointer h-44 justify-center items-center rounded-lg">
                        <div className='w-3/4 flex flex-col h-full justify-start items-start'>
                            <h2 className=' text-lg font-semibold text-slate-800'><span className=' text-lime-700'>HC-SR04</span>   <span className='text-slate-300 text-sm'>(Distance sensor)</span></h2>
                            <ul className=' flex flex-col h-full justify-center '>
                                <li className=' flex flex-col my-2'>
                                    <span className='text-sm text-slate-400'>Kilometer(km)</span>
                                    <span className='text-2xl text-slate-600'>6.7</span>
                                </li>
                                <li className=' flex flex-col'>
                                    <span className='text-sm text-slate-400'>Mile(mile)</span>
                                    <span className='text-2xl text-slate-600'>4.16319</span>
                                </li>
                            </ul>
                        </div>
                        <div className='w-1/4'>
                            <Image src='/icons/car.png' alt='proximity-sensor-image' width={100} height={100} className=' opacity-60 hover:opacity-100' />
                        </div>
                    </div>
                    <div className="row-span-2 bg-white p-4">Cell 3</div>
                    <div className="bg-white p-4 flex w-full shadow-sm hover:shadow-md hover:cursor-pointer h-44 justify-center items-center rounded-lg">
                        <div className='w-3/4 flex flex-col h-full justify-start items-start'>
                            <h2 className=' text-lg font-semibold text-slate-800'><span className=' text-lime-700'>DHT11</span>   <span className='text-slate-300 text-sm'>(Humidity sensor)</span></h2>
                            <ul className=' flex flex-col h-full justify-center '>
                                <li className=' flex flex-col my-2'>
                                    <span className='text-sm text-slate-400'>gm per c^m</span>
                                    <span className='text-2xl text-slate-600'>15</span>
                                </li>
                                <li className=' flex flex-col'>
                                    <span className='text-sm text-slate-400'>kg per m^3</span>
                                    <span className='text-2xl text-slate-600'>0.0785</span>
                                </li>
                            </ul>
                        </div>
                        <div className='w-1/4'>
                            <Image src='/icons/humidity.png' alt='proximity-sensor-image' width={100} height={100} className=' opacity-60 hover:opacity-100' />
                        </div>
                    </div>
                    <div className="bg-white p-4 flex w-full shadow-sm hover:shadow-md hover:cursor-pointer h-44 justify-center items-center rounded-lg">
                        <div className='w-3/4 flex flex-col h-full justify-start items-start'>
                            <h2 className=' text-lg font-semibold text-slate-800'><span className=' text-lime-700'>MQ-135</span>   <span className='text-slate-300 text-sm'>(Gas sensor)</span></h2>
                            <ul className=' flex flex-col h-full justify-center '>
                                <li className=' flex flex-col my-2'>
                                    <span className='text-sm text-slate-400'>PPM</span>
                                    <span className='text-2xl text-slate-600'>16168616</span>
                                </li>
                                <li className=' flex flex-col'>
                                    <span className='text-sm text-slate-400'>NH3</span>
                                    <span className='text-2xl text-slate-600'>0151</span>
                                </li>
                            </ul>
                        </div>
                        <div className='w-1/4'>
                            <Image src='/icons/carbon-monoxide.png' alt='proximity-sensor-image' width={100} height={100} className=' opacity-60 hover:opacity-100' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent