import { Outlet, useNavigate } from 'react-router-dom'

import ImgLayout from '../../assets/img-layout.png'
import { Button } from '../Buttons/Button'

import ImgLayout from '../../assets/img-layout.png'
import Navbar from '../Navbar/Navbar'

const LayoutPublic = () => {
  const navigate = useNavigate()
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
