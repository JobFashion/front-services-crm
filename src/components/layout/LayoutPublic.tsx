import { Outlet } from 'react-router-dom'

import ImgLayout from '../../assets/img-layout.png'
import Navbar from '../Navbar/Navbar'

const LayoutPublic = () => {
  return (
    <div className='flex flex-col justify-center overflow-y-hidden'>
      <Navbar />
      <div className='flex flex-row w-full h-full'>
        <Outlet />
        <div className='w-full h-full'>
          <img src={ImgLayout} alt='' />
        </div>
      </div>
    </div>
  )
}

export default LayoutPublic
