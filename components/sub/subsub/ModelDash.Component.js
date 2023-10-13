import React from 'react'
import Image from 'next/image'

const ModelDashComponent = (props) => {
    const { imageLocation, measure, measureUnit, measureSymbol, val } = props;
    let length = val.length;
    return (
        <div className="bg-white p-4 flex flex-col w-full shadow-sm hover:shadow-md hover:cursor-pointer h-44 justify-center items-center rounded-lg">
            <h2 className=' text-lg font-semibold text-slate-800 flex justify-between w-full py-2'><span className=' text-lime-700'>{measure}</span>   <span className='text-slate-300 text-sm'>{val[0]?.deviceId}</span></h2>
            <div className='flex justify-center items-center w-full '>
                <div className='w-3/4 flex flex-col h-full justify-start items-start'>

                    <ul className=' flex flex-col h-full justify-center '>
                        <li className=' flex flex-col my-2'>
                            <span className='text-sm text-slate-400'>{val[length - 1] ? val[length - 1].sensorTimestamp.slice(0, 10) + "   " + val[length - 1].sensorTimestamp.slice(11, 20) : ''}</span>
                            <span className='text-sm text-slate-400'>{measureUnit}</span>
                            <span className='text-2xl text-slate-600'>{val[length - 1] ? val[length - 1].sensorData + " " + measureSymbol : ''}</span>
                        </li>
                        {/* <li className=' flex flex-col'>
                <span className='text-sm text-slate-400'>Fahrenheit</span>
                <span className='text-2xl text-slate-600'>107.6&deg;F</span>
            </li> */}
                    </ul>
                </div>
                <div className='w-1/4'>
                    <Image src={imageLocation} alt='proximity-sensor-image' width={100} height={100} className=' opacity-60 hover:opacity-100' />
                </div>
            </div>
        </div>
    )
}

export default ModelDashComponent