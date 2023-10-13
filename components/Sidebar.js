import Link from 'next/link'
import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDashboard,
    faChartBar,
    faWheatAwnCircleExclamation,
    faListSquares,
    faLightbulb
} from "@fortawesome/free-solid-svg-icons";



const Sidebar = () => {
    return (
        <ul className=' flex text-lg flex-col bg-white w-full h-full '>
            <SidebarComp hr='/' icon={faDashboard} title='Dashboard' />
            <SidebarComp hr='/charts' icon={faChartBar} title='Charts' />
            <SidebarComp hr='/tuyacontrols' icon={faLightbulb} title='Tuya Control' />
            <SidebarComp hr='/esp32controls' icon={faWheatAwnCircleExclamation} title='ESP32 Controls' />
            <SidebarComp hr='/alldatas' icon={faListSquares} title='All Datas' />
        </ul>
    )
}

const SidebarComp = (props) => {
    const { hr, icon, title } = props;
    return <li className=' flex h-[50px] hover:bg-red-50 hover:transition-colors'>
        <Link href={hr} className='w-full h-[50px] p-4 flex items-center'>
            <span className=' text-orange-400 w-8 '><FontAwesomeIcon icon={icon} /></span>
            <span className=' pl-4 '>
                {title}
            </span>
        </Link>
    </li>
}

export default Sidebar