import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { ReactSVG } from "react-svg";

const ProductRating = ({ ratingValue }) => {
  let rating = [];
  if (ratingValue && ratingValue > 0) {
    for (let i = 0; i <= ratingValue - 1; i++) {
      rating[i] = (
        <li key={i}>
          <ReactSVG
            src={process.env.PUBLIC_URL + "/assets/img/icons/star.svg"}
          />
        </li>
      );
    }
  }
  return <Fragment>{rating}</Fragment>;
};

ProductRating.propTypes = {
  ratingValue: PropTypes.number
};

export default ProductRating;
