import React, { useState } from 'react'
import globalStyles from '../styles/global-styles'
import { Global } from '@emotion/react'
import Nav from './nav'
import Sidebar from './sidebar'
import Footer from './footer'

const Layout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false)

  const toggleSidebar = () => {
    setOpenNav(!openNav)
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Nav toggleSidebar={toggleSidebar} />
      <Sidebar openNav={openNav} toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
