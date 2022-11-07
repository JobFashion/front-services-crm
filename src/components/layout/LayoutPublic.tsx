import { Outlet } from 'react-router-dom'

import ImgLayout from '../../assets/img-layout.png'

const LayoutPublic = () => {
  return (
    <div className='flex flex-col justify-center  w-full'>
      {/* componente Navbar Crear */}
      <div className='h-20 shadow-lg w-full flex justify-between items-center px-24'>
        <div>Logo</div>
        <div className='flex gap-20'>
          <button className='text-[#2F4DFE]'>Crear Cuenta</button>
          <button className='text-white bg-[#2F4DFE] rounded-lg py-2 px-4'>Iniciar Sesion</button>
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
