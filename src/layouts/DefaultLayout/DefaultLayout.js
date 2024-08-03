import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { Header } from "../../components";
import { Footer } from "../../components";

const DefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.any
};

export default DefaultLayout;
