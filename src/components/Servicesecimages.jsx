import React from 'react'
import Proptypes from "prop-types"

export function Servicesecimages(props) {
    return (
        <div className='servicesection__card-cont'>
            <div className='servicesection__card-img-cont'>
                <img src={props.imgurl} />
            </div>
            <div className='serivcesection__card-data-cont'>
                <h2>{props.heading}</h2>
                <p>{props.description}</p>
                <button>Know More</button>
            </div>
        </div>
    )
}

Servicesecimages.propTypes = {
    imgurl : Proptypes.object
}
