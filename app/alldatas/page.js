'use client'
import FetchAllSensorData from '@/utils/FetchAllSensorData'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const list = ['HC-SR04', 'MQ-135', 'DS18B20']
  const { data: dataSensor, isLoading: isLoadingStatus } = FetchAllSensorData();
  return (
    <div className=' min-h-full w-full '>
      <h2 className=' text-base font-semibold '>All Nodes</h2>
      <ul className=' flex gap-2 '>
        {
          list?.map(i => <li key={i} className=' border px-2 py-1 text-sm hover:bg-slate-400 hover:text-slate-50 rounded-lg '><Link href={`/alldatas/${i}`}>{i}</Link></li>)
        }
      </ul>
      <div className='  flex flex-col justify-start items-start w-full h-full'>
        <h2 className=' text-lg font-semibold '>Latest 10 Data Points</h2>
        <table className=' w-full border border-slate-100 m-2'>
          <thead>
            <tr className=' text-slate-600 border-b '>
              <th className=' p-2 '>Created ID</th>
              <th className=' p-2 '>Sensor Data</th>
              <th className=' p-2 '>Sensor Timestamp</th>
            </tr>
          </thead>
          <tbody className=' text-slate-400 '>
            {
              dataSensor ? [...dataSensor].reverse().slice(0, 10).map((d) => (
                <tr key={d.createdId} className=' text-center '>
                  <td className=' p-2 '>{d.createdId}</td>
                  <td className=' p-2 '>{d.sensorData}</td>
                  <td className=' p-2 '>{d.sensorTimestamp}</td>
                </tr>
              )) : null
            }
          </tbody>
        </table>
      </div>




    </div>
  )
}

export default page