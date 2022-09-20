import React from "react";
// components
import { Footerinfo } from "./Footerinfo";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

// data
import { Footerdata } from "../Data";
// stylesheet
import "../css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="footer__info-cont">
          {Object.keys(Footerdata.footerinfo).map((element, index) => {
            return (
              <Footerinfo
                heading={element}
                links={Footerdata.footerinfo[element]}
              />
            );
          })}
        </div>
        <div className="footer__copyright">
          <h2>Tourism</h2>
          <p>CopyRight @2022</p>
          <div className="footer__socialicons">
            <AiOutlineFacebook className="footer__social-icon"/>
            <AiOutlineInstagram className="footer__social-icon"/>
            <AiOutlineTwitter className="footer__social-icon"/>
            <AiFillYoutube className="footer__social-icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};
