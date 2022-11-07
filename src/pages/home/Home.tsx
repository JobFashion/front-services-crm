import { Button } from '../../components/Buttons/Button'

const Home = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='px-10 py-24 flex flex-col gap-20'>
        <p className='text-3xl font-bold text-gray-700'>
          La plataforma CRM <span className='text-[#2F4DFE]'>nombre marca</span> que necesitas para
          gestionar el servicios de atención al cliente y la resoluc ión de reclamos en un sólo
          lugar.
        </p>
        <div className='flex flex-col gap-8 px-10'>
          <Button text='Inicio Sesion' />
          <p>
            ¿No tienes cuenta? <span className='text-[#2F4DFE] ml-2'>Crear cuenta</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
