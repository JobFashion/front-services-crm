import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div className='bg-cyan-200'>
      <div>Layout Public</div>
      <Outlet />
    </div>
  )
}

export default LayoutPublic
