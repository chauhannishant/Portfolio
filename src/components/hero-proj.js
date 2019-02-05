import React from 'react'
import {withPrefix} from 'gatsby'


const HeroProj = (props) => (
    <div className="mainProj">
        <img className="projImg" alt={props.alt} src={withPrefix(props.imageName)}/>
        <div className="projText">
            {props.children}
        </div>
    </div>
)

export default HeroProj