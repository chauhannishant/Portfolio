import React from 'react'
import {withPrefix} from 'gatsby'


const Project = (props) => (
    <div className="mainProj">
        <img className="projImg" alt={props.alt} src={withPrefix(props.imageName)}/>
        <div className="projText">
            {props.children}
        </div>
    </div>
)

export default Project