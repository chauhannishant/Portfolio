import React from 'react'
import {withPrefix} from 'gatsby'

const Project = (props) => (
    <div className="mainProj">
        <div className="projText">
            {/* {props.children} */}
        </div>
        <img alt={props.alt} src={withPrefix(props.imageName)}/>
    </div>
)

export default Project