import React from 'react'
import Title from './title'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

const AboutSection = () => {
  return (
    <section
      className="section"
      id="about"
      css={css`
        .about-content {
          display: grid;
          align-items: center;
        }

        p {
          margin-bottom: 2rem;
          font-weight: 200;
        }

        @media screen and (min-width: 768px) {
          .about-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 4rem 2rem;
          }

          .about-image {
            height: 100%;
            border-radius: var(--border-radius);
          }

          p {
            margin-bottom: 0;
          }

          p:first-of-type {
            margin-bottom: 1rem;
          }
        }
      `}
    >
      <Title titleName="about" />
      <div className="about-content">
        <div className="about-info">
          <p>
            Lucky Guy Brewing all began while John McCormick “the lucky guy” was
            serving in the United States Army and stationed in Germany. He
            really took a liking to the wonderful beer selection their and took
            it upon himself to learn how to brew beer. Once separating from the
            military and returning home to Springfield, Ma he began brewing beer
            in his garage for friends and family.
          </p>
          <p>
            Fast forward three years later and he decided it was time to take
            things to the next level and open up Lucky Guy Brewing bringing you
            amazing craft beers that will leave you coming back for more. Stop
            by, say hi and enjoy a beer!
          </p>
        </div>
        <div className="about-image">
          <StaticImage
            src="../images/about.jpg"
            alt="bar tender serving beer"
            layout="fullWidth"
            placeholder="tracedSVG"
            className="about-image"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
