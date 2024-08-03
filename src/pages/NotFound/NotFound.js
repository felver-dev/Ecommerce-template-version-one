import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="body-wrapper space-pt--70 space-pb--120">
      <div className="no-items-found">
        <div className="no-items-found__image">
          <FaTimes />
        </div>
        <div className="no-items-found__content">
          <p>
            Nothing here
            <Link to={process.env.PUBLIC_URL + "/home"}>
              Go back to homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
