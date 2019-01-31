import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'



const Header = ({ siteTitle }) => (
    <div className="navBar marginAuto maxWidth ">
        <ul className="topNav noMargin">
          <li> <a href="" className="noDec">Work</a> </li>
          <li> <a href="" className="noDec">About</a> </li>
          <li> <a href="" className="noDec">Contact</a> </li>
        </ul>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
