import { css } from '@emotion/react'
import '@fontsource/montserrat'
import '@fontsource/montserrat/900.css'

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
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat';
    font-size: 16px;
    line-height: 1.5;
    background: var(--color-dark);
    color: var(--color-light);
  }

  img {
    width: 100%;
  }

  li {
    list-style: none;
  }

  a {
    color: var(--color-primary);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 0.5;
  }

  ${'' /* utility classes */}
  .section {
    margin: 4rem 0;
  }

  .btn-large {
    display: block;
    padding: 1rem 4rem;
    border: transparent;
    cursor: pointer;
    border-radius: var(--border-radius);
    outline: transparent;
    font-size: 1rem;
    margin-top: 1rem;
    text-align: center;
  }

  .btn-small {
    display: inline-block;
    padding: 1rem 4rem;
    border: transparent;
    cursor: pointer;
    border-radius: var(--border-radius);
    outline: transparent;
    font-size: 1rem;
    text-align: center;
  }

  .btn-primary {
    background: var(--color-primary);
    color: var(--color-secondary);

    &:hover {
      background: var(--color-light);
      color: var(--color-dark);
    }
  }
`

export default globalStyles
