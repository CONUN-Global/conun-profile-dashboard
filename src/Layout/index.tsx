import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => (
  <>
    {/* <Header /> */}
    <Outlet />
    {/* <Footer /> */}
  </>
)

export default Layout
