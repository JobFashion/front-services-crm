import { Navigate, Outlet } from 'react-router-dom'

const LayoutPrivate = () => {
  const auth = true
  return auth ? <Outlet /> : <Navigate to='/login' />
}

export default LayoutPrivate
