import { Button } from '../../components/Buttons/Button'

const Register = () => {
  return (
    <div className='px-20 w-full flex flex-col'>
      <div className='py-24 flex flex-col gap-20'>
        <h2 className='text-4xl font-bold text-gray-800'>Crear Cuenta</h2>
        <form>
          <input
            className=' focus:outline-none border-b border-gray-500 py-3 px-6 w-9/12'
            type='text'
            placeholder='Ingrese un email'
          />
        </form>
      </div>
      <div className='flex flex-col gap-8 py-6'>
        <p>Enviaremos un código de verificación al email que se ingresa arriba</p>
        <Button
          text='Siguiente'
          iconRight='https://upload.wikimedia.org/wikipedia/commons/2/24/Arrow-right-512.png'
          colorButton='bg-gray-300'
        />
        <p>
          ¿Ya tienes cuenta? <span className='text-[#2F4DFE] ml-2'>Inicia Sesion</span>
        </p>
      </div>
      <div className='py-8'>
        <Button
          text='Continuar con Google'
          iconLeft='https://www.raqnbeauty.com/wp-content/uploads/2020/06/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png'
        />
      </div>
    </div>
  )
}

export default Register
