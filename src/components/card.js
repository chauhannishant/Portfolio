import React from 'react'
import {withPrefix} from 'gatsby'


const Card = (props) => (
    <div className="card">
        <img className="cardImg noMargin" alt={props.alt} src={withPrefix(props.imageName)} width="280px" height="240px"/>
        <div className="cardText">
            {props.children}
        </div>
    </div>
)

export default Card
