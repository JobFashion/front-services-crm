import { Outlet } from 'react-router-dom'

const LayoutPrivate = () => {
  return (
    <div className='bg-green-200'>
      <div>Layout Private</div>
      <Outlet />
    </div>
  )
}

export default LayoutPrivate
