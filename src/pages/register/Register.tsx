import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ArrowRight from '../../assets/icons_SVG/ArrowRight.svg'
import ArrowRightWhite from '../../assets/icons_SVG/ArrowRightWhite.svg'
import Google from '../../assets/icons_SVG/Google.svg'
import { Button } from '../../components/Buttons/Button'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [focus, setFocus] = useState(false)

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  }
  return (
    <div className='px-20 w-full flex flex-col'>
      <div className='py-16 flex flex-col gap-20'>
        <h2 className='text-4xl font-bold text-gray-800'>Crear Cuenta</h2>
        <form className='py-2 flex flex-col'>
          {focus && (
            <label className={` ${email.length > 3 ? 'text-[#2F4DFE]' : ' text-gray-500'}`}>
              Ingrese un email
            </label>
          )}

          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(email.length ? true : false)}
            onChange={e => {
              setEmail(e.target.value)
              validateEmail(e.target.value)
            }}
            className='text-lg focus:outline-none border-b border-gray-500 py-3 px-5 w-9/12 placeholder:text-lg placeholder:text-gray-700'
            type='text'
            placeholder='Ingrese un email'
          />
          {!validateEmail(email) && <label className=' text-gray-500'>Assistive text</label>}
        </form>
      </div>
      <div className='flex flex-col gap-8 py-6 font-semibold text-gray-700'>
        <p>Enviaremos un código de verificación al email que se ingresa arriba</p>
        <Button
          text='Siguiente'
          iconRight={validateEmail(email) ? ArrowRightWhite : ArrowRight}
          colorButton={validateEmail(email) ? 'bg-[#2F4DFE]' : 'bg-gray-300'}
          textColor={validateEmail(email) ? 'text-white' : 'text-gray-500'}
        />
        <p>
          ¿Ya tienes cuenta?
          <span
            onClick={() => navigate('/login')}
            className='text-[#2F4DFE] ml-2 cursor-pointer font-semibold'
          >
            Inicia Sesion
          </span>
        </p>
      </div>
      <div className='flex flex-row w-full justify-center items-center gap-4'>
        <hr className=' w-full' />
        <span className='text-gray-500 font-semibold'>O</span>
        <hr className='w-full' />
      </div>
      <div className='py-8'>
        <Button text='Continuar con Google' iconLeft={Google} />
      </div>
    </div>
  )
}

export default Register
