import * as React from 'react'
import AboutSection from '../components/about-section'
import BeerSection from '../components/beer-section'
import ContactSection from '../components/contact-section'
import Layout from '../components/layout'
import Showcase from '../components/showcase'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Showcase />
      <AboutSection />
      <BeerSection />
      <ContactSection />
      {/* contact info */}
      {/* footer */}
    </Layout>
  )
}

export default IndexPage
