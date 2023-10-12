import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })
const font = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className='border p-4 flex justify-center items-center h-[50px]'>
          <Navbar />
        </div>
        <div className='flex flex-row justify-center items-center w-full h-[80vh]'>
          <div className=' w-1/6 border flex justify-start items-start h-[100%] '>
            <Sidebar />
          </div>
          <div className=' w-5/6 border flex justify-center items-center h-[100%]'>
            {children}
          </div>
        </div>
        <div className='border p-4 flex justify-center items-center h-[50px]'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
