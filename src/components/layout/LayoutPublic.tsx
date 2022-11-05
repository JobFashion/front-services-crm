import { Navigate, Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  const auth = false
  return auth ? <Navigate to='/dashboard' replace /> : <Outlet />
}

export default LayoutPublic
