import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Buttons/Button'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [focus, setFocus] = useState(false)
  const [focusPassword, setFocusPassword] = useState(false)

  return (
    <div className='px-20 w-full flex flex-col'>
      <div className='pt-16 flex flex-col gap-20'>
        <h2 className='text-4xl font-bold text-gray-800'>Inicia Sesion</h2>
        <form className='flex flex-col'>
          {focus && (
            <label className={` ${user.length > 3 ? 'text-blup' : ' text-gray-500'}`}>
              Usuario
            </label>
          )}

          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(user.length ? true : false)}
            onChange={e => {
              setUser(e.target.value)
            }}
            className='text-lg focus:outline-none border-b border-gray-500 py-2 mb-4 px-5 w-9/12 placeholder:text-lg placeholder:text-gray-700'
            type='text'
            placeholder='Usuario'
          />
          <div className='pt-14 flex flex-col'>
            {focusPassword && (
              <label className={` ${password.length > 3 ? 'text-blup' : ' text-gray-500'}`}>
                Contraseña
              </label>
            )}
            <input
              onFocus={() => setFocusPassword(true)}
              onBlur={() => setFocusPassword(password.length ? true : false)}
              onChange={e => {
                setPassword(e.target.value)
              }}
              className='text-lg focus:outline-none border-b border-gray-500 py-2 px-5 w-9/12 placeholder:text-lg placeholder:text-gray-700'
              type='password'
              placeholder='Contraseña'
            />
            {/* <p className='text-red-500 pr-20'>
              Recuerda que debe ser de 8 a 15 caracteres, al menos 1 letra y 1 número, sin
              carácteres especiales ni símbolos
            </p> */}
          </div>
        </form>
      </div>
      <div className='flex flex-col gap-8 py-6 text-gray-700'>
        <Link to='#' className='text-blup hover:underline'>
          No recuerdo mi contraseña
        </Link>
        <Button
          size='medium'
          text='Ingresar'
          colorButton={password.length && user.length ? 'bg-blup' : 'bg-gray-300'}
          textColor={password.length && user.length ? 'text-white' : 'text-gray-500 '}
        />
        <div className='flex gap-4 items-center'>
          <input type='checkbox' name='check' id='check' />
          <p>Recordar mi cuenta para próximos inicios</p>
        </div>
        <p>
          ¿No tienes cuenta?
          <Link to={'/register'} className='text-blup ml-2 cursor-pointer font-semibold'>
            Crear cuenta
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
