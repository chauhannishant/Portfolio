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
                classNameToggle: 'mg-0',
                isActive: false,
            }
    }
        
    toggle = () => {
        this.setState({ isActive: !this.state.isActive }, () => {
            if (this.state.isActive) {
                this.setState({ classNameToggle: 'mg-0 active' })
            } 
            else {
                this.setState({ classNameToggle: 'mg-0' })
            }
        })
    }
    render () {
        return (
            <div className="navBar mg-0-Auto mxWid">
                <ul className="mg-0 topNav">
                    <li className={this.setState.toggle}> <Link to="/" onClick={this.toggle} className="noDec menuLinks"><img className="menuIcon" src={icWork} alt="Work" width="40px" height="40px"/>Work</Link> </li>
                    <li className={this.setState.toggle}> <Link to="/" onClick={this.toggle} className="noDec menuLinks"><img className="menuIcon" src={icPerson} alt="Personal" width="40px" height="40px"/>About</Link> </li>
                    <li className={this.setState.toggle}> <Link to="/contact" onClick={this.toggle} className="noDec menuLinks"><img className="menuIcon" src={icContact} alt="Contact" width="40px" height="40px"/>Contact</Link> </li>
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
*/

const Header = () =>(
    <div className="flx mg-0-Auto mxWid navBar">
        <ul className=" flx mg-0 navMenu">
            <li className="mg-0 flx"> <Link to="/" className="noDec menuLinks"><img className="menuIcon" src={icWork} alt="Work" width="40px" height="40px"/>Work</Link> </li>
            <li className="mg-0 flx"> <Link to="/" className="noDec menuLinks"><img className="menuIcon" src={icPerson} alt="Personal" width="40px" height="40px"/>About</Link> </li>
            <li className="mg-0 flx"> <Link to="/contact" className="noDec menuLinks"><img className="menuIcon" src={icContact} alt="Contact" width="40px" height="40px"/>Contact</Link> </li>
        </ul>
    </div>
)


export default Header
