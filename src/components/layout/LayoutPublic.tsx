import { Outlet, useNavigate } from 'react-router-dom'

import ImgLayout from '../../assets/img-layout.png'
import { Button } from '../Buttons/Button'

const LayoutPublic = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center  w-full'>
      {/* componente Navbar Crear */}
      <div className='h-20 shadow-lg w-full flex justify-between items-center px-24'>
        <div onClick={() => navigate('/')} className='cursor-pointer bg-gray-400 px-12 py-2'>
          <span className='text-white text-xl'>Logo</span>
        </div>
        <div className='flex gap-20'>
          <button className='text-blup'>Crear Cuenta</button>
          <Button text='Inicio Sesion' />
        </div>
      </div>
      <div className='flex flex-row-reverse w-full'>
        <div className='w-full'>
          <img src={ImgLayout} alt='' />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPublic
