import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'



class Header extends React.Component {
    constructor(props) {
        super(props)
        
            this.state = {
                classNameToggle: 'topNav',
                isActive: false,
            }
        }
        
    toggle = () => {
        this.setState({ isActive: !this.state.isActive }, () => {
            if (this.state.isActive) {
                this.setState({ classNameToggle: 'noMargin topNav active' })
            } 
            else {
                this.setState({ classNameToggle: 'noMargin topNav' })
            }
        })
    }
    render () {
        return (
            <div className="navBar marginAuto maxWidth">
                <a className="noMargin navMobile"  onClick={this.toggle}>Menu</a>
                <ul className={this.state.classNameToggle}>
                    <li className="noMargin "> <a href="" className="noDec">Work</a> </li>
                    <li className="noMargin "> <a href="" className="noDec">About</a> </li>
                    <li className="noMargin "> <a href="" className="noDec">Contact</a> </li>
                </ul>
            </div>
        )
    }
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}
Header.defaultProps = {
    siteTitle: ``,
}
export default Header
