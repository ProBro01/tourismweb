import React from 'react'
// component
import { Sectionname } from './Sectionname'
import { Servicesecimages } from './Servicesecimages'
// data
import { sectionCards } from "../Data.js"
// stylesheet
import "../css/servicesection.css"

export const Servicesection = () => {
  return (
    <div className='service__section'>
      <div className='service__section-cont'>
        <Sectionname name="service" />
        <div className='service__section-data'>
          {
            Object.keys(sectionCards).map((element, index) => {
              return <Servicesecimages imgurl={sectionCards[element].imgurl} heading={sectionCards[element].heading} description={sectionCards[element].description} />
            })
          }
        </div>
      </div>
    </div> 
  )
}
/**
 * service 
 * guides
 * tourist reviews
 * facilites
 * prices templates
 * actionbutton for join 
 * contact
 */