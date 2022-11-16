import { Outlet, useNavigate } from 'react-router-dom'

import ImgLayout from '../../assets/img-layout.png'
import { Button } from '../Buttons/Button'

import Navbar from '../Navbar/Navbar'

const LayoutPublic = () => {
  const navigate = useNavigate()
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
