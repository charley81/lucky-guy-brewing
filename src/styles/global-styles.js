import { css } from '@emotion/react'
import '@fontsource/montserrat'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/200.css'

/*
Supported variables:
import '@fontsource/montserrat/900.css'
Weights: [100,200,300,400,500,600,700,800,900]
Styles: [italic,normal]
Supported subsets: [cyrillic,cyrillic-ext,latin,latin-ext,vietnamese]

*/

const globalStyles = css`
  :root {
    --color-primary: #978459;
    --color-secondary: #4d4d49;
    --color-light: #dfdac5;
    --color-dark: #2a2a28;
    --border-radius: 3px;
    --transition: all 0.3s ease;
    --max-width: 1200px;
    --rotate: rotate(180deg);
    --scale: scale(1.25);
    --letter-spacing: 4px;
    ${'' /* snipcart variables */}
    --bgColor-default: var(--color-dark);
    --color-default: var(--color-light);
    --color-alt: var(--color-light);
    --borderColor-default: var(--color-light);
    --color-icon: var(--color-light);
    --color-link: var(--color-primary);
    --color-link-hover: var(--color-light);
    --color-inputLabel: var(--color-light);
    --bgColor-alt: var(--color-dark);
    --bgColor-modal: var(--color-dark);
    --bgColor-input: var(--color-light);
    --bgColor-input-hover: var(--color-light);
    --bgColor-input-focus: var(--color-light);
    --bgColor-buttonPrimary: var(--color-primary);
    --bgColor-buttonPrimary-hover: var(--color-light);
    --color-buttonPrimary-hover: var(--color-dark);
    --bgColor-buttonSecondary: var(--color-primary);
    --bgColor-buttonSecondary-hover: var(--color-light);
    --color-buttonSecondary-hover: var(--color-dark);
    --color-buttonSecondary: var(--color-light);
    --color-inputIcon: var(--color-light);
    --color-inputLabel: var(--color-light);
  }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat';
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
    line-height: 1.5;
    background: var(--color-dark);
    color: var(--color-light);
    letter-spacing: 2px;
  }

  img {
    width: 100%;
  }

  li {
    list-style: none;
  }

  a {
    color: var(--color-light);
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    line-height: 0.5;
  }

  ${'' /* utility classes */}
  .section {
    max-width: var(--max-width);
    margin: 12rem auto;
    padding: 0 1rem;

    h3 {
      margin-bottom: 3rem;
    }
  }

  .cart-icon {
    font-size: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  .underline {
    height: 0.25rem;
    background: var(--color-light);
  }

  .btn {
    margin-top: 2rem;
    padding: 0.5rem 4rem;
    border: transparent;
    cursor: pointer;
    border-radius: var(--border-radius);
    outline: transparent;
    font-size: 0.75rem;
    text-align: center;
    width: 100%;
    border: 1px solid transparent;
  }

  .btn-large {
    display: block;
  }

  .btn-small {
    display: inline-block;
  }

  .btn-primary {
    background: var(--color-primary);
    color: var(--color-light);

    &:hover {
      background: var(--color-light);
      color: var(--color-dark);

      a {
        color: var(--color-dark);
      }
    }
  }

  .btn-light {
    background: var(--color-light);
    color: var(--color-dark);

    &:hover {
      background: transparent;
      border: 1px solid var(--color-light);
      color: var(--color-light);

      a {
        color: var(--color-light);
      }
    }
  }

  ${'' /* sidebar */}
  .sidebar {
    background: var(--color-dark);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);
  }

  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }

  ${'' /* media queries */}
  @media screen and (max-width: 500px) {
    body {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    body {
      font-size: 18px;
    }

    .btn {
      font-size: 1rem;
    }
  }
`

export default globalStyles
