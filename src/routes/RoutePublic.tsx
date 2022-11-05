import { Navigate, Outlet } from 'react-router-dom'

const RoutePublic = () => {
  const auth = false
  return auth ? <Navigate to='/dashboard' replace /> : <Outlet />
}

export default RoutePublic
