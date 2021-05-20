import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const links = [
  {
    id: 1,
    text: 'about',
    sectionLink: '#about',
  },
  {
    id: 2,
    text: 'beer',
    sectionLink: '#beer',
  },
  {
    id: 3,
    text: 'contact',
    sectionLink: '#contact',
  },
  {
    id: 4,
    text: <FaShoppingCart />,
    sectionLink: '#cart',
    className: 'cart-icon',
  },
]

export default links
