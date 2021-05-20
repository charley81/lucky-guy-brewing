import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const InfoSection = () => {
  return (
    <section className="section" id="info">
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
        <div className="header"></div>
        <div className="underline"></div>
        <div className="main"></div>
        <div className="underline"></div>
      </div>
    </section>
  )
}

export default InfoSection
