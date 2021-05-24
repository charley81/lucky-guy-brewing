import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AiFillDribbbleCircle, AiFillTwitterCircle } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { css } from '@emotion/react'

const InfoSection = () => {
  return (
    <section
      className="section"
      id="info"
      css={css`
        .info-content {
          margin-top: 4rem;
        }

        .title {
          margin-bottom: 0;
          font-size: 1.5rem;
          text-transform: capitalize;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.5rem;
        }

        .icon {
          font-size: 2rem;
          margin-left: 0.25rem;
          padding: 0.25rem;
          background: var(--color-primary);
          border-radius: 50%;
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            color: var(--color-primary);
            background: var(--color-light);
            transform: var(--scale);
          }
        }

        .main {
          margin: 2rem 0;
        }

        .address {
          padding-bottom: 2rem;
        }

        .info-image {
          border-radius: var(--border-radius);
        }

        @media screen and (min-width: 500px) {
          .icon {
            margin: 0 0.5rem;
          }
        }

        @media screen and (min-width: 768px) {
          .main {
            display: flex;
            justify-content: space-between;
          }
        }

        @media screen and (min-width: 992px) {
          .info-content {
            margin-top: 0;
          }

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          gap: 4rem;
        }
      `}
    >
      <div className="info-image">
        <StaticImage
          src="../images/contact.jpg"
          alt="bar tender serving beer"
          layout="fullWidth"
          placeholder="tracedSVG"
          className="about-image"
        />
      </div>
      <div className="info-content">
        <div className="header">
          <h3 className="title">contact</h3>
          <div className="icon-container">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Twitter"
            >
              <AiFillTwitterCircle className="icon" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Linkedin"
            >
              <TiSocialLinkedinCircular className="icon" />
            </a>
            <a
              href="https://www.dribbble.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to Dribble"
            >
              <AiFillDribbbleCircle className="icon" />
            </a>
          </div>
        </div>
        <div className="underline"></div>
        <div className="main">
          <ul className="address">
            <li>345 Smith Street</li>
            <li>Springfield, Ma 01199 </li>
            <li>413.58.0912</li>
            <li>info@lgb.com</li>
          </ul>
          <ul className="hours">
            <li>Thursday: 3pm–10pm</li>
            <li>Friday: 3pm–11pm</li>
            <li>Saturday: 1pm–11pm</li>
            <li>iSunday: 1pm–7pm</li>
          </ul>
        </div>
        <div className="underline"></div>
      </div>
    </section>
  )
}

export default InfoSection
