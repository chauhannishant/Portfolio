import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import icBurger from '../icons/ic-burger.svg'
import icCross from '../icons/ic-cross.svg'


class Header extends React.Component {
    constructor(props) {
        super(props)
        
            this.state = {
                classNameToggle: 'topNav',
                srcToggle: icBurger,
                isActive: false,
            }
        }
        
    toggle = () => {
        this.setState({ isActive: !this.state.isActive }, () => {
            if (this.state.isActive) {
                this.setState({ classNameToggle: 'topNav active' })
                this.setState({ srcToggle: icCross })
            } 
            else {
                this.setState({ classNameToggle: 'topNav' })
                this.setState({ srcToggle: icBurger })
            }
        })
    }
    render () {
        return (
            <div className="navBar marginAuto maxWidth">
                <a className="noMargin navMobile" onClick={this.toggle}><img className="noMargin" src={this.state.srcToggle} alt="Menu" width="32px" height="32px" /></a>
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
