import { Navigate, Outlet } from 'react-router-dom'

const RoutePrivate = () => {
  const auth = true
  return auth ? <Outlet /> : <Navigate to='/login' />
}

export default RoutePrivate
