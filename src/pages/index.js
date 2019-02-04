import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'

const IndexPage = () => (
  <Layout>
    <SEO title="Nishant" keywords={[`gatsby`, `application`, `react`]} />
    <div className="heroCont marginAuto">
      <h1>Hello, I am Nishant</h1>
      <p>I am a digital product designer with a focus on User Experience. I am passionate about learning new things & belive a designer in isolation starts to rot. I have learnt a lot from my teams in the past and gained the skills to build this portfolio with help from my team at Cleartrip.</p>
    </div>
    <Project className="oddProj" imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>Project Title 1</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </Project>
    <Project imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>Project Title 2</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </Project>
    <Project className="oddProj" imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>Project Title 3</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </Project>
    <Project imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>Project Title 4</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </Project>
    <Project className="oddProj" imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>Project Title 5</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </Project>
</Layout>
)

export default IndexPage
