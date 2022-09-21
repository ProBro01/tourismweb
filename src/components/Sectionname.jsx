import React from 'react'
// data
import { sectionNames } from '../Data'
// stylesheet
import "../css/servicesection.css"

export const Sectionname = (props) => {
    return (
        <div className='service__section-name-cont'>
            {
                sectionNames[`${props.name}`].map((element, index) => {
                    return <p>{element}</p>
                })
            }
        </div>
    )
}
