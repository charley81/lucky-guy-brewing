import React, { useState } from 'react'
import globalStyles from '../styles/global-styles'
import { Global, css } from '@emotion/react'
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
      <div
        css={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;

          main {
            flex-grow: 1;
          }
        `}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
