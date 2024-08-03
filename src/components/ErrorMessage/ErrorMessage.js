import PropTypes from "prop-types";
import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{ minHeight: "100vh" }}
    >
      {errorMessage}
    </div>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string
};

export default ErrorMessage;
