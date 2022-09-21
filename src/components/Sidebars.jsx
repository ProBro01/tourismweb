import React from 'react'

export const Sidebars = (props) => {
    return (
        <div className={` ${props.className} herosection__info1 herosection__infos`}>
            <div className='herosection__info-img-cont'>
                <img src={props.touristicon} />
            </div>
            <div>
                <h2>{props.number}</h2>
                <p>{props.title}</p>
            </div>
        </div>
    )
}
