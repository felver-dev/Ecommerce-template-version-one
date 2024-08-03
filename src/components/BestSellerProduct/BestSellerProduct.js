import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { getProducts, getDiscountPrice } from "../../helpers/product";
import { addToWishlistDispatch } from "../../redux/actions/wishlistActions";

const BestSellerProduct = ({ products, wishlistItems, addToWishlist }) => {
  return (
    <div className="featured-product-area space-mb--25">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* section title */}
            <h2 className="section-title space-mb--20">
              Best Sale{" "}
              <Link to={process.env.PUBLIC_URL + "/shop"}>
                VIEW ALL{" "}
                <span>
                  <ReactSVG
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/icons/arrow-right.svg"
                    }
                  />
                </span>
              </Link>
            </h2>
            {/* featured products */}
            <div className="featured-product-wrapper space-mb-m--15">
              <div className="row row-5">
                {products &&
                  products.map((single) => {
                    const wishlistItem = wishlistItems.filter(
                      (wishlistItem) => wishlistItem.id === single.id
                    )[0];
                    return (
                      <div className="col-6" key={single.id}>
                        <div className="featured-product space-mb--15">
                          <div className="featured-product__image">
                            <Link
                              to={
                                process.env.PUBLIC_URL + `/product/${single.id}`
                              }
                            >
                              <img
                                src={process.env.PUBLIC_URL + single.image[0]}
                                className="img-fluid"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="featured-product__content">
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
                            <div className="icon">
                              <button
                                className={
                                  wishlistItem !== undefined ? "active" : ""
                                }
                                disabled={wishlistItem !== undefined}
                                onClick={() => addToWishlist(single)}
                              >
                                <ReactSVG src="assets/img/icons/heart.svg" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BestSellerProduct.propTypes = {
  addToWishlist: PropTypes.func,
  products: PropTypes.array,
  wishlistItems: PropTypes.array
};
const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      state.productData.products,
      ownProps.limit,
      ownProps.type
    ),
    wishlistItems: state.wishlistData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToWishlist: (item) => {
      dispatch(addToWishlistDispatch(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestSellerProduct);
