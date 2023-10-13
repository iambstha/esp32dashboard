import Link from 'next/link'
import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faChartBar,
  faWheatAwnCircleExclamation,
  faListSquares
} from "@fortawesome/free-solid-svg-icons";



const Sidebar = () => {
    return (
        <ul className=' flex text-lg flex-col bg-white w-full h-full '>
            <li className=' flex  p-3 hover:bg-red-50 hover:transition-colors'><Link href='/' className='w-full h-full p-1'><FontAwesomeIcon icon={faDashboard}/><span className=' pl-2 '> Dashboard </span></Link></li>
            <li className=' flex  p-3 hover:bg-red-50 hover:transition-colors'><Link href='/charts' className='w-full h-full p-1'><FontAwesomeIcon icon={faChartBar}/><span className=' pl-2 '> Charts </span></Link></li>
            <li className=' flex  p-3 hover:bg-red-50 hover:transition-colors'><Link href='/controls' className='w-full h-full p-1'><FontAwesomeIcon icon={faWheatAwnCircleExclamation}/><span className=' pl-2 '> Controls </span></Link></li>
            <li className=' flex  p-3 hover:bg-red-50 hover:transition-colors'><Link href='/alldatas' className='w-full h-full p-1'><FontAwesomeIcon icon={faListSquares}/><span className=' pl-2 '> All Datas </span></Link></li>
        </ul>
    )
}

export default Sidebar