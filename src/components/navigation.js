import React, { useState } from 'react'
import styled from '@emotion/styled'
import NavLinks from './nav-links'

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 10vh;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`
const Toggle = styled.div``
const Navbox = styled.div``
const Hamburger = styled.div``

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <Nav>
      <h3>Lucky Guy Brewing</h3>
      <Toggle isOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navOpen ? (
        <Navbox>
          <NavLinks />
        </Navbox>
      ) : (
        <Navbox>
          <NavLinks />
        </Navbox>
      )}
    </Nav>
  )
}

export default Navigation
