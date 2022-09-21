import React from "react";
// images
import banner from "../assets/images/banner.jpg";
import touristicon from "../assets/images/touristicon.png";
import hotelicon from "../assets/images/hotelicon.png";
import touristplaceicon from "../assets/images/touristplaceicon.png";
// stylesheets
import "../css/herosection.css";
// components
import { Sidebars } from "./Sidebars";
// data
import { sidebardata } from "../Data.js"

export const Herosection = () => {
  return (
    <section className="hero__section">
      <div className="herosection-cont">
        <img src={banner} className="herosection__banner-image" />
        <div className="herosection__images">
          {
            Object.keys(sidebardata).map((element, index) => {
              return (
                <Sidebars touristicon={sidebardata[element].icon} number={sidebardata[element].numdata} className={sidebardata[element].classname} title={sidebardata[element].title} />
              )
            })
          }
        </div>
        <div className="herosection__heading">
          <h1>
            Welcome To <span>JAITOUR</span>
          </h1>
          <h3>Jaipur's Largest Tourist Guide</h3>
          <div className="herosection__button-cont">
            <button className="herosection-tour-button">Book Tour</button>
            <button className="knowus_button">Know Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};
