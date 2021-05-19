import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import links from '../utils/nav-links'
import { css } from '@emotion/react'

const Sidebar = ({ openNav, toggleSidebar }) => {
  return (
    <aside
      className={openNav ? 'sidebar show-sidebar' : 'sidebar'}
      css={css`
        .sidebar-links li {
          opacity: 0;
          animation: slideRight 0.5s ease-in-out 0.3s forwards;
        }

        @keyframes slideRight {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .sidebar-links li a {
          display: block;
          font-size: 2rem;
          margin-bottom: 2rem;
          text-transform: capitalize;
          transition: var(--transition);
          text-align: center;

          &:hover {
            transform: var(--scale);
            letter-spacing: var(--letter-spacing);
          }
        }

        button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
          color: var(--color-light);
          font-size: 2rem;
          background: transparent;
          border: transparent;
          transition: var(--transition);

          &:hover {
            transform: var(--scale) var(--rotate);
            color: var(--color-primary);
          }
        }
      `}
    >
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
