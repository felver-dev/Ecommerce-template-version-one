import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

class Offcanvas extends Component {
  componentDidMount() {
    const offcanvasNavigations = document.querySelectorAll(
      ".offcanvas-navigation > li"
    );
    offcanvasNavigations.forEach(single => {
      single.addEventListener("click", () => {
        this.props.activeStatus(false);
      });
    });
  }

  render() {
    return (
      <div className={`offcanvas-menu ${this.props.show ? "active" : ""}`}>
        <div className="profile-card text-center">
          <div className="profile-card__image space-mb--10">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/profile.jpg"}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="profile-card__content">
            <p className="name">
              Don Normane <span className="id">ID MD 4350</span>
            </p>
          </div>
        </div>
        <div className="offcanvas-navigation-wrapper space-mt--40">
          <ul className="offcanvas-navigation">
            <li>
              <span className="icon">
                <ReactSVG
                  src={process.env.PUBLIC_URL + "/assets/img/icons/profile.svg"}
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/login"}>
                Login / Sign up
              </Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/profile-two.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/profile"}>My Profile</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/icons/notification.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/notification"}>
                Notification
              </Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={process.env.PUBLIC_URL + "/assets/img/icons/product.svg"}
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/shop"}>All products</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/cart-two.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/order"}>My Order</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/cart-three.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/cart"}>Cart</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/wishlist.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>Wishlist</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/gear-two.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/edit-profile"}>
                Settings
              </Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={process.env.PUBLIC_URL + "/assets/img/icons/profile.svg"}
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Offcanvas;
