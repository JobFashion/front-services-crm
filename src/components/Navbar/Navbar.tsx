import { Link } from 'react-router-dom'

import { Button } from '../Buttons/Button'

const Navbar = () => {
  return (
    <div className='shadow-lg w-full flex justify-between items-center px-24 py-4'>
      <Link to={'/'} className='cursor-pointer bg-gray-400 px-12 py-2'>
        <span className='text-white text-xl'>Logo</span>
      </Link>
      <div className='flex gap-20'>
        <Button redirect='register' textColor='text-blup' text='Crear Cuenta' />
        <Button redirect='login' colorButton='bg-blup' text='Inicio Sesion' />
      </div>
    </div>
  )
}

export default Navbar
