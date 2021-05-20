import React from 'react'
import { css } from '@emotion/react'

const Footer = () => {
  return (
    <footer
      css={css`
        background: var(--color-secondary);
        padding: 1rem;
        text-align: center;

        p {
          margin: 1rem 0;
        }

        span {
          color: var(--color-primary);
        }

        @media screen and (min-width: 992px) {
          display: flex;
          justify-content: space-between;
        }
      `}
    >
      <p>
        &copy; <span>Lucky Guy Brewing </span> {new Date().getFullYear()}
      </p>
      <p>
        Designed & Developed By:{' '}
        <a href="www.google.com">
          <span>TGDC</span>
        </a>
      </p>
    </footer>
  )
}

export default Footer
