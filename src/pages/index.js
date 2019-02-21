import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroProj from '../components/hero-proj'
import Card from '../components/card'

const IndexPage = () => (
  <Layout>
    <SEO title="Nishant" keywords={[`gatsby`, `application`, `react`]} />
    <div className="heroCont mg-0-Auto">
      <h1>Hello, I am Nishant</h1>
      <p>I am a digital product designer with a focus on User Experience. I am passionate about learning new things & belive a designer in isolation starts to rot. I have learnt a lot from my teams in the past and gained the skills to build this portfolio with help from my team at Cleartrip.</p>
    </div>
    <HeroProj imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>HeroProj Title 1</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </HeroProj>
    <HeroProj imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>HeroProj Title 2</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </HeroProj>
    <HeroProj imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>HeroProj Title 3</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </HeroProj>
    <HeroProj imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>HeroProj Title 4</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </HeroProj>
    <HeroProj imageName="/srp-thumb.png" alt="SRP Thumbnail">
      <h3>HeroProj Title 5</h3>
      <p>Brief explanation on what we set out to do and what was the main challenge on the outset. Brief explanation on what we set out to do and what was the main challenge on the outset.</p>
    </HeroProj>

    <div className="divider mg-0-Auto"></div>
    
    <h2 className="cardTitle">Other Randomness</h2>
    <div className="cardStack" >
      <Card imageName="/srp-thumb.png" alt="SRP Thumbnail">
        <h4>Project Title 1</h4>
      </Card>
      <Card imageName="/srp-thumb.png" alt="SRP Thumbnail">
        <h4>Project Title 2</h4>
      </Card>
      <Card imageName="/srp-thumb.png" alt="SRP Thumbnail">
        <h4>Project Title 3</h4>
      </Card>
    </div>
</Layout>
)

export default IndexPage
