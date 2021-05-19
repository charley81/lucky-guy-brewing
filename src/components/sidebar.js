import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import links from '../utils/nav-links'
import { css } from '@emotion/react'

const Sidebar = ({ openNav, toggleSidebar }) => {
  return (
    <aside className={openNav ? 'sidebar show-sidebar' : 'sidebar'}>
      {/* close button */}
      <button>
        <AiOutlineClose
          type="button"
          className="close-btn"
          onClick={toggleSidebar}
        />
      </button>

      {/* side container */}
      <ul className={openNav ? 'sidebar-links' : null}>
        {links.map(link => {
          return (
            <li key={link.id}>
              <a href={link.sectionLink}>{link.text}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
