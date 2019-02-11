import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import icWork from '../icons/ic-work.svg'
import icPerson from '../icons/ic-person.svg'
import icContact from '../icons/ic-contact.svg'


/*class Header extends React.Component {
    constructor(props) {
        super(props)
        
            this.state = {
                classNameToggle: 'topNav noMargin',
                srcToggle: icBurger,
                isActive: false,
            }
        }
        
    toggle = () => {
        this.setState({ isActive: !this.state.isActive }, () => {
            if (this.state.isActive) {
                this.setState({ classNameToggle: 'noMargin topNav active' })
                this.setState({ srcToggle: icCross })
            } 
            else {
                this.setState({ classNameToggle: 'noMargin topNav' })
                this.setState({ srcToggle: icBurger })
            }
        })
    }
    render () {
        return (
            <div className="navBar marginAuto maxWidth">
                <a className="noMargin navMobile" onClick={this.toggle}><img className=" noMargin" src={this.state.srcToggle} alt="Menu" width="28px" height="28px" /></a>
                <ul className="noMargin topNav">
                    <li className="noMargin "> <Link to="/" className="noDec"><img className="menuIcon" src={icWork} alt="Work"/>Work</Link> </li>
                    <li className="noMargin "> <Link to="/" className="noDec"><img className="menuIcon" src={icPerson} alt="Personal"/>About</Link> </li>
                    <li className="noMargin "> <Link to="/contact" className="noDec"><img className="menuIcon" src={icContact} alt="Contact"/>Contact</Link> </li>
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
}*/


const Header = () =>(
    <div className="navBar marginAuto maxWidth">
        <ul className="noMargin topNav">
            <li className="noMargin "> <Link to="/" className="noDec menuLinks"><img className="menuIcon" src={icWork} alt="Work" width="40px" height="40px"/>Work</Link> </li>
            <li className="noMargin "> <Link to="/" className="noDec menuLinks"><img className="menuIcon" src={icPerson} alt="Personal" width="40px" height="40px"/>About</Link> </li>
            <li className="noMargin "> <Link to="/contact" className="noDec menuLinks"><img className="menuIcon" src={icContact} alt="Contact" width="40px" height="40px"/>Contact</Link> </li>
        </ul>
    </div>
)


export default Header
