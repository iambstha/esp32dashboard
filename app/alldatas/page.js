import Link from 'next/link'
import React from 'react'

const page = () => {
    const list = ['HC-SR04','MQ-135','DS18B20']
  return (
    <div>
        <ul>
            <h2>All Datas</h2>
            {
                list?.map(i => <li key={i}><Link href={`/alldatas/${i}`}>{i}</Link></li>)
            }
        </ul>

        
    </div>
  )
}

export default page