import { Link } from 'react-router-dom'

import { Button } from '../../components/Buttons/Button'

const Home = () => {
  return (
    <div className='px-20 w-full flex flex-col'>
      <div className='py-24 flex flex-col gap-20'>
        <p className='text-4xl font-bold text-gray-700'>
          La plataforma CRM <span className='text-blup'>nombre marca</span> que necesitas para
          gestionar el servicios de atención al cliente y la resoluc ión de reclamos en un sólo
          lugar.
        </p>
        <div className='flex flex-col gap-8 px-10 py-6'>
          <Button redirect='login' colorButton='bg-blup' size='medium' text='Inicio Sesion' />
          <p>
            ¿No tienes cuenta?{' '}
            <Link to={'/register'} className='text-blup ml-2 font-semibold cursor-pointer'>
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
