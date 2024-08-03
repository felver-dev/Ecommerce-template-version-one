import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="body-wrapper bg-color--gradient space-pt--70 space-pb--120">
      {/* auth page header */}
      <div className="auth-page-header space-mb--50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="auth-page-header__title">Welcome</h3>
              <p className="auth-page-header__text">
                Don't have account? <br /> Please sign up for creating a new
                account.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* auth page body */}
      <div className="auth-page-body">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Auth form */}
              <div className="auth-form">
                <form>
                  <div className="auth-form__single-field space-mb--30">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Full name"
                    />
                  </div>
                  <div className="auth-form__single-field space-mb--30">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                      type="text"
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="auth-form__single-field space-mb--30">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="auth-form__single-field space-mb--40">
                    <p className="auth-form__info-text">
                      Already have an account?{" "}
                      <Link to={process.env.PUBLIC_URL + "/login"}>
                        Sign in Now
                      </Link>
                    </p>
                  </div>
                  <button className="auth-form__button">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* auth page footer */}
      <div className="auth-page-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="auth-page-separator text-center space-mt--20 space-mb--20">
                - OR -
              </span>
              <div className="auth-page-social-login">
                <button>
                  <ReactSVG
                    src={
                      process.env.PUBLIC_URL + "/assets/img/icons/facebook.svg"
                    }
                  />
                  Sign In with Facebook
                </button>
                <button>
                  <ReactSVG
                    src={
                      process.env.PUBLIC_URL + "/assets/img/icons/google.svg"
                    }
                  />
                  Sign In with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
