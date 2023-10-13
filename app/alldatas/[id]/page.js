'use client'
import React from 'react'
import FetchSensorDataById from '@/utils/FetchSensorDataById'
import Link from 'next/link'
const page = ({ params }) => {
  const list = ['HC-SR04', 'MQ-135', 'DS18B20']
  const url = decodeURIComponent(params.id)
  console.log(url)

  const { data: dataSensor, isLoading: isLoadingStatus } = FetchSensorDataById(url);

  console.log(dataSensor)
  console.log(isLoadingStatus)
  return (
    <div className='  flex flex-col p-4 justify-start items-start border w-full h-full'>
            <h2 className=' text-base font-semibold '>All Nodes</h2>
      <ul className=' flex gap-2 '>
        {
          list?.map(i => <li key={i} className=' border px-2 py-1 text-sm hover:bg-slate-400 hover:text-slate-50 rounded-lg '><Link href={`/alldatas/${i}`}>{i}</Link></li>)
        }
      </ul>
      <h2 className=' text-lg font-semibold '>All Datas</h2>
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
            dataSensor ? dataSensor.reverse().slice(0,10).map((d) => (
              <tr key={d.createdId} className=' border text-center '>
                <td className=' p-2 '>{d.createdId}</td>
                <td className=' p-2 '>{d.sensorData}</td>
                <td className=' p-2 '>{d.sensorTimestamp}</td>
              </tr>
            )) : null
          }
        </tbody>
      </table>
    </div>
  )
}

export default page