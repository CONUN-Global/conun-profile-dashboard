import { Navigate } from 'react-router-dom'
import Layout from '../Layout'
import Login from '../pages/Auth/Login'
import Dashboard from '../pages/Dashboard'

const publicRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' replace />
  }
]

export default publicRoutes
