import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { getDiscountPrice } from "../../helpers/product";
import { Breadcrumb } from "../../components";

const Checkout = ({ cartItems }) => {
  let cartTotalPrice = 0;
  return (
    <div
      className={`body-wrapper ${
        cartItems && cartItems.length >= 1 ? "bg-color--gradient" : ""
      } space-pt--70 space-pb--120`}
    >
      <Breadcrumb pageTitle="Checkout" prevUrl="/home" />

      {cartItems && cartItems.length >= 1 ? (
        <div className="checkout-body space-mt--30">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* checkout form */}
                <div className="checkout-form">
                  <form>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Enter Full Name"
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="userName">User Name</label>
                      <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Enter User Name"
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="phoneNo">Phone</label>
                      <input
                        type="text"
                        name="phoneNo"
                        id="phoneNo"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="emailAddress">Email Address</label>
                      <input
                        type="text"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="shippingAddress">Shipping Address</label>
                      <textarea
                        name="shippingAddress"
                        id="shippingAddress"
                        cols={30}
                        rows={5}
                        placeholder="Enter Shipping Address"
                        defaultValue={""}
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="orderNotes">Order Notes</label>
                      <textarea
                        name="orderNotes"
                        id="orderNotes"
                        cols={30}
                        rows={5}
                        placeholder="Enter Order Notes"
                        defaultValue={""}
                      />
                    </div>
                    <div className="your-order-area space-mb--30">
                      <h3>Your order</h3>
                      <div className="your-order-wrap gray-bg-4">
                        <div className="your-order-product-info">
                          <div className="your-order-top">
                            <ul>
                              <li>Product</li>
                              <li>Total</li>
                            </ul>
                          </div>
                          <div className="your-order-middle">
                            <ul>
                              {cartItems.map((cartItem, key) => {
                                const discountedPrice = getDiscountPrice(
                                  cartItem.price,
                                  cartItem.discount
                                );

                                discountedPrice != null
                                  ? (cartTotalPrice +=
                                      discountedPrice * cartItem.quantity)
                                  : (cartTotalPrice +=
                                      cartItem.price * cartItem.quantity);
                                return (
                                  <li key={key}>
                                    <span className="order-middle-left">
                                      {cartItem.name} X {cartItem.quantity}
                                    </span>{" "}
                                    <span className="order-price">
                                      {discountedPrice !== null
                                        ? "$" +
                                          (
                                            discountedPrice * cartItem.quantity
                                          ).toFixed(2)
                                        : "$" +
                                          (
                                            cartItem.price * cartItem.quantity
                                          ).toFixed(2)}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="your-order-bottom">
                            <ul>
                              <li className="your-order-shipping">Shipping</li>
                              <li>Free shipping</li>
                            </ul>
                          </div>
                          <div className="your-order-total">
                            <ul>
                              <li className="order-total">Total</li>
                              <li>${cartTotalPrice.toFixed(2)}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="checkout-form__button">
                      Place Order
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-items-found">
          <div className="no-items-found__image">
            <ReactSVG
              src={process.env.PUBLIC_URL + "/assets/img/icons/money.svg"}
            />
          </div>
          <div className="no-items-found__content">
            <p>
              No Items in the cart to checkout.{" "}
              <Link to={process.env.PUBLIC_URL + "/shop"}>Add Some</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData
  };
};

export default connect(mapStateToProps)(Checkout);
