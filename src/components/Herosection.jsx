import React from "react";
// images
import banner from "../assets/images/banner.jpg";
import touristicon from "../assets/images/touristicon.png";
import hotelicon from "../assets/images/hotelicon.png";
import touristplaceicon from "../assets/images/touristplaceicon.png";
// stylesheets
import "../css/herosection.css";

export const Herosection = () => {
  return (
    <section className="hero__section">
      <div className="herosection-cont">
        <img src={banner} className="herosection__banner-image" />
        <div className="herosection__images">
          <div className="herosection__info1 herosection__infos">
          <img src={touristicon} />
            <div>
              <h2>10000+</h2>
              <p>Visited Tourist</p>
            </div>
          </div>
          <div className="herosection__info2 herosection__infos">
            <img src={touristplaceicon} />
            <div>
              <h2>90+</h2>
              <p>Places Covered</p>
            </div>
          </div>
          <div className="herosection__info3 herosection__infos">
            <img src={hotelicon} />
            <div>
              <h2>30+</h2>
              <p>Hotels</p>
            </div>
          </div>
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
