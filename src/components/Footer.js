import React from "react";
import "../assets/css/Footer.css";
import Img3 from "../assets/3.png";
import { FaPhone } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer">
      <p className="rating">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={Img3} alt="img" className="img3" />
      <p className="ability">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </p>
      <hr style={{ borderColor: "red", margin: "0 10px 0" }} />
      <div className="details">
        <p>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p style={{ margin: "12px" }}>
          <span>CHEMICALS & PROCESS </span> <span>POWER </span>{" "}
          <span>WATER & WASTE WATER </span> <span>OILS & GAS </span>{" "}
          <span>PHARMA </span> <span>SUGARS & DISTILLERIES </span>{" "}
          <span>PAPER & PULP </span> <span>MARINE & DEFENCE </span>{" "}
          <span>METAL & MINING </span> <span>FOOD & BEVERAGE </span>{" "}
          <span>PETROCHEMICAL & REFINERIES </span> <span>SOLAR </span>{" "}
          <span>BUILDING </span> <span>HVAC </span> <span>FIRE FIGHTING </span>
          <span style={{ border: "none" }}>AGRICULTURE & RESIDENTIAL</span>
        </p>
      </div>
      <div className="info">
        <p style={{ color:"#fff" }}>
          <FaPhone className="icon1" />
          Toll free 1800200 1234
        </p>
        <a
          style={{ textDecoration: "none",color:"#fff" }}
          href="https://www.facebook.com/cripumps"
        >
          <CiFacebook className="icon2" />
          www.facebook.com/criumps
        </a>
        <a style={{ textDecoration: "none",color:"#fff" }} href="https://www.crigroups.com/">
          <TbWorld className="icon3" />
          www.crigroups.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
