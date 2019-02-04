import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="heroCont marginAuto">
      <h1>Hello, I am Nishant</h1>
      <p>I am a digital product designer with a focus on User Experience. I am passionate about learning new things & belive a designer in isolation starts to rot. I have learnt a lot from my teams in the past and gained the skills to build this portfolio with help from my team at Cleartrip.</p>
    </div>
    
  </Layout>
)

export default IndexPage
