import React from 'react'
import links from '../utils/nav-links'
import { css } from '@emotion/react'
import { HiMenuAlt3 } from 'react-icons/hi'

const Nav = ({ toggleSidebar }) => {
  return (
    <nav
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        z-index: 200;

        .nav-center {
          width: 90vw;
          max-width: 1300px;
          margin: 0 auto;
        }

        .nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          h3 {
            margin: 0;
          }
        }

        button {
          background: transparent;
          border: transparent;
        }

        .toggle-btn {
          color: var(--color-light);
          font-size: 2.5rem;
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            transform: scale(1.25) rotate(180deg);
            color: var(--color-primary);
          }
        }

        .section-links {
          display: none;
        }

        @media screen and (min-width: 768px) {
          .toggle-btn {
            display: none;
          }

          .section-links {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .section-links a {
            text-transform: capitalize;
            margin-right: 2rem;
          }

          .nav-center {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
          }
        }
      `}
    >
      <div className="nav-center">
        <div className="nav-header">
          <h3>Lucky Guy Brewing</h3>
          <button>
            <HiMenuAlt3
              type="button"
              className="toggle-btn"
              onClick={toggleSidebar}
            />
          </button>
        </div>
        <ul className="section-links">
          {links.map(link => {
            return (
              <li key={link.id}>
                <a href={link.navLink}>{link.text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
