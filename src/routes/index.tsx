import { useRoutes } from 'react-router-dom'

import RoutePrivate from './RoutePrivate'
import RoutePublic from './RoutePublic'

import LayoutPrivate from '../components/layout/LayoutPrivate'
import LayoutPublic from '../components/layout/LayoutPublic'
import {
  Home,
  Analytics,
  Claims,
  Clients,
  Dashboard,
  Employees,
  Login,
  NotFound,
  Profile,
  Register,
  Services,
} from '../pages'

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <LayoutPrivate />,
      children: [
        {
          path: '/',
          element: <RoutePrivate />,
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
      ],
    },
    {
      path: '/',
      element: <LayoutPublic />,
      children: [
        {
          path: '/',
          element: <RoutePublic />,
          children: [
            { index: true, element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
          ],
        },
      ],
    },
    { path: '*', element: <NotFound /> },
  ])
}

export default Router
