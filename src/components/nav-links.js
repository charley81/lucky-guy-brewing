import React from 'react'
import { Link } from 'gatsby'
import { FaShoppingCart } from 'react-icons/fa'
import styled from '@emotion/styled'

const NavItem = styled.a`
  display: inline-block;
  transition: var(--transition);

  :after {
  }
`

export const NavLinks = () => {
  return (
    <>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#beer">Beer</NavItem>
      <NavItem href="#contact">Contact</NavItem>
      <NavItem>
        <FaShoppingCart className="cart-icon" />
      </NavItem>
    </>
  )
}

export default NavLinks
