import React from 'react';
import PropTypes from "prop-types";
// stylesheets
import "../css/Footer.css"

export function Footerinfo({heading, links}) {
  return (
    <div className='footerinfo'>
        <h2>{heading}</h2>
        {
            links.map((element, index) => {
                return <p>{element}</p>
            })
        }
    </div>
  )
}

Footerinfo.propsTypes = {
    heading : PropTypes.string,
    links : PropTypes.array,
}
