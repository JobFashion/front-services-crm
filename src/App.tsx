import { useState } from 'react'

import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center bg-slate-100 h-screen w-screen'>
      <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
        <img src={reactLogo} className='w-32 mb-6 motion-safe:animate-bounce' alt='React logo' />
      </a>
      <button
        className='bg-slate-600 py-3 px-6 rounded-lg text-slate-200'
        onClick={() => setCount(count => count + 1)}
      >
        count is {count}
      </button>
      <p className='mt-4 text-center text-sm'>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default App
