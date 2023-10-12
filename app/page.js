import DashboardComponent from '@/components/sub/Dashboard.Component'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=" flex flex-col justify-start items-start h-full p-4 w-full bg-gray-50 " >
      <DashboardComponent />
    </div>
  )
}
