import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import { FaRegTimesCircle, FaShoppingCart, FaCog } from "react-icons/fa";
import { Breadcrumb } from "../../components";
import { getDiscountPrice } from "../../helpers/product";
import { deleteFromWishlistDispatch } from "../../redux/actions/wishlistActions";
import { addToCartDispatch } from "../../redux/actions/cartActions";

const Wishlist = ({ wishlistItems, deleteFromWishlist, addToCart }) => {
  return (
    <div className="body-wrapper space-pt--70 space-pb--120">
      <Breadcrumb pageTitle="Wishlist" prevUrl="/home" />
      <div className="order-product-area">
        {wishlistItems && wishlistItems.length >= 1 ? (
          wishlistItems.map(single => {
            return (
              <div
                className="cart-product border-bottom--medium"
                key={single.id}
              >
                <div className="cart-product__image">
                  <img
                    src={process.env.PUBLIC_URL + single.image[0]}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="cart-product__content">
                  <h3 className="title">{single.name}</h3>
                  <span className="category">
                    {single.category.map((item, index, arr) => {
                      return item + (index !== arr.length - 1 ? ", " : "");
                    })}
                  </span>
                  <div className="price">
                    {single.discount && single.discount > 0 ? (
                      <Fragment>
                        <span className="main-price mr-1">{`$${single.price}`}</span>
                        <span className="discounted-price">{`$${getDiscountPrice(
                          single.price,
                          single.discount
                        )}`}</span>
                      </Fragment>
                    ) : (
                      <span className="discounted-price">{`$${single.price}`}</span>
                    )}
                  </div>
                </div>
                <div className="cart-product__status">
                  {single.variation && single.variation.length >= 1 ? (
                    <Link to={process.env.PUBLIC_URL + `/product/${single.id}`}>
                      <FaCog />
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        addToCart(single);
                        deleteFromWishlist(single);
                      }}
                    >
                      <FaShoppingCart />
                    </button>
                  )}
                  <button
                    onClick={() => deleteFromWishlist(single)}
                    className="danger"
                  >
                    <FaRegTimesCircle />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-items-found">
            <div className="no-items-found__image">
              <ReactSVG
                src={process.env.PUBLIC_URL + "/assets/img/icons/wishlist.svg"}
              />
            </div>
            <div className="no-items-found__content">
              <p>
                No Items in the wishlist.{" "}
                <Link to={process.env.PUBLIC_URL + "/shop"}>Add Some</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Wishlist.propTypes = {
  addToCart: PropTypes.func,
  deleteFromWishlist: PropTypes.func,
  wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
    wishlistItems: state.wishlistData,
    cartItems: state.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromWishlist: item => {
      dispatch(deleteFromWishlistDispatch(item));
    },
    addToCart: (item, quantityCount) => {
      dispatch(addToCartDispatch(item, quantityCount));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
