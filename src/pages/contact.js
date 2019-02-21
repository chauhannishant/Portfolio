import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
      <SEO title="Nishant" keywords={[`gatsby`, `application`, `react`]} />
        <div className="heroCont mg-0-Auto">
          <h1>Get in touch</h1>
          <p>Want to get in touch dummy copy dummy copy dummy copy dummy copy dummy copy dummy copy dummy copy dummy </p>
        </div>
        <form action="">
          <fieldset>
            <label>Name
              <input type="name" name="Name"></input>
            </label>
            <label>Email
              <input type="email" name="Email"></input>
            </label>
            <label >Your message
              <input type="text" name="Message"></input>
            </label>
          </fieldset>
          <button className=" button" type="submit">Send</button>
        </form>
    </Layout>
)

export default ContactPage