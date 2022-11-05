import { useRoutes } from 'react-router-dom'

import LayoutPrivate from '../components/layout/LayoutPrivate'
import LayoutPublic from '../components/layout/LayoutPublic'
import Analytics from '../pages/analytics/Analytics'
import Claims from '../pages/claims/Claims'
import Clients from '../pages/clients/Clients'
import Dashboard from '../pages/dashboard/Dashboard'
import Employees from '../pages/employees/Employees'
import Login from '../pages/login/Login'
import NotFound from '../pages/notFound/NotFound'
import Profile from '../pages/profile/Profile'
import Register from '../pages/register/Register'
import Services from '../pages/services/Services'

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <LayoutPrivate />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'claims', element: <Claims /> },
        { path: 'services', element: <Services /> },
        { path: 'profile', element: <Profile /> },
        { path: 'clients', element: <Clients /> },
        { path: 'employees', element: <Employees /> },
        { path: 'analytics', element: <Analytics /> },
      ],
    },
    {
      path: '/',
      element: <LayoutPublic />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ])
}

export default Router
