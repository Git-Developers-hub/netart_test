import React from "react";
import "../assets/css/Article.css";
import Img2 from "../assets/2.png";
import Award from "../assets/1.png";

const Article = () => {
  return (
    <>
      <div className="flex_container">
        <div className="award">
          <img src={Award} alt="award" className="img" />
        </div>
        <div className="article">
          <h4 className="heading1">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h4>
          <ul className="content">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              {" "}
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={Img2} alt="img" className="img2" />
          <p className="content2">
            Government of India has awarded the{" "}
            <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </>
  );
};

export default Article;
