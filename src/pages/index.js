import * as React from 'react'
import AboutSection from '../components/about-section'
import BeerSection from '../components/beer-section'
import ContactSection from '../components/contact-section'
import InfoSection from '../components/info-section'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Showcase from '../components/showcase'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home Page" description="Lucky Guy Brewing but beer online" />
      <Showcase />
      <AboutSection />
      <BeerSection />
      <ContactSection />
      <InfoSection />
      {/* footer */}
    </Layout>
  )
}

export default IndexPage
