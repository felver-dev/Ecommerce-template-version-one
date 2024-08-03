import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-slider-wrapper text-center">
      <div className="single-welcome-slide-wrapper">
        <div className="single-welcome-slide">
          <div className="single-welcome-slide__head">
            <div className="logo space-mb--15">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                className="img-fluid"
                alt=""
              />
            </div>
            <h3 className="title">BEST SHOPPING EXPERIENCE</h3>
          </div>
          <div className="single-welcome-slide__body space-pt--15 space-pb--15">
            <div className="banner-image">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/welcome.png"}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="single-welcome-slide__footer">
            <p className="text space-bottom--30">
              Most Popular Shopping website, With <br /> lots of fashionable
              products
            </p>
            <Link to={process.env.PUBLIC_URL + "/home"} className="welcome-btn">
              CONTINUE
            </Link>
            <Link to={process.env.PUBLIC_URL + "/home"} className="skip-btn">
              skip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
