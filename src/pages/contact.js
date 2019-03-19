import React from 'react'
import { Link } from 'gatsby'
import ContactForm from '../components/ContactForm'
import icLinkedin from '../icons/ic-linkedin.svg'
import icInstagram from '../icons/ic-instagram.svg'
import icTwitter from '../icons/ic-twitter.svg'
import icResume from '../icons/ic-resume.svg'
import Layout from '../components/layout'
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
      <SEO title="Nishant" keywords={[`gatsby`, `application`, `react`]} />
        <div className="flx contPage">
          <ContactForm className="halfWid"/>
          <div className="flx halfWid socialLinks">
              <a href="https://www.linkedin.com/in/nishant-chauhan-70171861/" target="_blank" rel="noreferrer noopener" className="noDec"><img className="socialIcon" src={icLinkedin} alt="Linkedin" width="40px" height="40px"/>Linkedin</a>
              <a href="https://www.instagram.com/nishant.calligraphy/" target="_blank" rel="noreferrer noopener" className="noDec"><img className="socialIcon" src={icInstagram} alt="Instagram" width="40px" height="40px"/>Instagram</a>
              <a href="https://twitter.com/NishantThinks" target="_blank" rel="noreferrer noopener" className="noDec"><img className="socialIcon" src={icTwitter} alt="Twitter" width="40px" height="40px"/>Twitter</a>
              <a href="https://www.dropbox.com/s/gd0dka6pxkf9hje/Resume_Nishant.pdf" target="_blank" rel="noreferrer noopener" className="noDec"><img className="socialIcon" src={icResume} alt="Resume" width="40px" height="40px"/>Resume</a>
          </div>
        </div>
        
    </Layout>
)

export default ContactPage