import { Outlet } from 'react-router-dom'

import ImgLayout from '../../assets/img-layout.png'
import Navbar from '../Navbar/Navbar'

const LayoutPublic = () => {
  return (
    <div className='flex flex-col justify-center h-full w-full'>
      <Navbar />
      <div className='flex flex-row-reverse w-full'>
        <div className='w-full h-full'>
          <img src={ImgLayout} alt='' />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPublic
