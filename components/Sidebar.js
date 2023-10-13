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
            <li className=' flex h-[50px] hover:bg-red-50 hover:transition-colors'><Link href='/' className='w-full h-[50px] p-4 flex items-center'><FontAwesomeIcon icon={faDashboard}/><span className=' pl-2 '> Dashboard </span></Link></li>
            <li className=' flex h-[50px] hover:bg-red-50 hover:transition-colors'><Link href='/charts' className='w-full h-[50px] p-4 flex items-center'><FontAwesomeIcon icon={faChartBar}/><span className=' pl-2 '> Charts </span></Link></li>
            <li className=' flex h-[50px] hover:bg-red-50 hover:transition-colors'><Link href='/controls' className='w-full h-[50px] p-4 flex items-center'><FontAwesomeIcon icon={faWheatAwnCircleExclamation}/><span className=' pl-2 '> Controls </span></Link></li>
            <li className=' flex h-[50px] hover:bg-red-50 hover:transition-colors'><Link href='/alldatas' className='w-full h-[50px] p-4 flex items-center'><FontAwesomeIcon icon={faListSquares}/><span className=' pl-2 '> All Datas </span></Link></li>
        </ul>
    )
}

export default Sidebar