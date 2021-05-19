import React from 'react'
import { css } from '@emotion/react'

const Title = ({ titleName }) => {
  return (
    <h3
      css={css`
        font-size: 2rem;
        text-align: center;
        text-transform: capitalize;
        color: var(--color-primary);
      `}
    >
      {titleName}
    </h3>
  )
}

export default Title
