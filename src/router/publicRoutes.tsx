import { Navigate } from 'react-router-dom'
import Layout from '../Layout'
import Login from '../pages/Auth/Login'

const publicRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' replace />
  }
]

export default publicRoutes
