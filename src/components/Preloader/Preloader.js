import React from "react";

const Preloader = () => {
  return (
    <div className="preloader-activate preloader-active">
      <div className="preloader-area-wrap">
        <div className="spinner d-flex justify-content-center align-items-center h-100">
          <div className="img-loader" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
