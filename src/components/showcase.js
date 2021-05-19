import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

const Showcase = () => {
  return (
    <header
      css={css`
        position: relative;

        .showcase-img {
          height: 100vh;
        }

        .showcase-text {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          background: rgba(0, 0, 0, 0.4);
          padding: 1rem;
          text-align: center;
        }

        .text-wrap {
          max-width: 800px;
          margin-top: -10vh;
          background: rgba(0, 0, 0, 0.7);
          padding: 2rem 1rem;
          border-radius: var(--border-radius);
        }

        .tagline {
          font-weight: 200;
        }

        @media screen and (min-width: 500px) {
          h1 {
            font-size: 2.5rem;
          }
        }

        @media screen and (min-width: 768px) {
          h1 {
            font-size: 3rem;
          }
        }

        @media screen and (min-width: 1100px) {
          h1 {
            font-size: 4rem;
          }
        }
      `}
    >
      <StaticImage
        src="../images/showcase.jpg"
        alt="inside of beer brewery showing brew tanks"
        loading="eager"
        objectFit="cover"
        layout="fullWidth"
        placeholder="tracedSVG"
        className="showcase-img"
      />
      {/* showcase text */}
      <div className="showcase-text">
        <div className="text-wrap">
          <h1>Lucky Guy Brewing</h1>
          <p className="tagline">
            A veteran owned and operated craft brewery bringing the finest brews
            to ever touch your lips
          </p>

          <a href="#beer" className="btn btn-large btn-primary">
            Order Beer
          </a>
        </div>
      </div>
    </header>
  )
}

export default Showcase
