import React, { useState } from 'react'
import globalStyles from '../styles/global-styles'
import { Global } from '@emotion/react'
import Nav from './nav'
import Sidebar from './sidebar'

const Layout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false)

  const toggleSidebar = () => {
    console.log('You clicked the toggle button')
    setOpenNav(!openNav)
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Nav toggleSidebar={toggleSidebar} />
      <Sidebar openNav={openNav} toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
