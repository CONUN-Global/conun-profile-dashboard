import { Navigate } from 'react-router-dom'
import Layout from '../Layout'
import Login from '../pages/Auth/Login'
import Main from '../pages/Main'

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
        path: '/main',
        element: <Main />,
        children: [
          { path: 'dashboard', element: <Main /> },
          {
            path: 'requests',
            element: <Main />,
            children: [
              { path: 'request-form', element: <Main /> },
              { path: 'business-trip', element: <Main /> },
              { path: 'payment-form', element: <Main /> }
            ]
          },
          { path: 'password-manager', element: <Main /> }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' replace />
  }
]

export default publicRoutes
