import React from 'react'
import links from '../utils/nav-links'
import { css } from '@emotion/react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { FaShoppingCart } from 'react-icons/fa'

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

          h2 {
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
            transform: var(--scale) var(--rotate);
            color: var(--color-primary);
          }
        }

        .section-links {
          display: none;
        }

        .cart-icon {
          font-size: 1.5rem;

          &:hover {
            cursor: pointer;
          }
        }

        @media screen and (min-width: 992px) {
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
            transition: var(--transition);
            cursor: pointer;

            &:hover {
              color: var(--color-primary);
            }
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
          <h2>Lucky Guy Brewing</h2>
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
              <AnchorLink key={link.id} to={`/${link.sectionLink}`}>
                {link.text}
              </AnchorLink>
            )
          })}
          <li>
            <FaShoppingCart className="snipcart-checkout cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
