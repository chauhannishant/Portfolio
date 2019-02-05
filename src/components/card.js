import React from 'react'
import {withPrefix} from 'gatsby'


const Card = (props) => (
    <div className="card">
        <img className="cardImg noMargin" alt={props.alt} src={withPrefix(props.imageName)} width="260px" height="200px"/>
        <div className="cardText">
            {props.children}
        </div>
    </div>
)

export default Card