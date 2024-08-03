import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { getProducts, getDiscountPrice } from "../../helpers/product";
import { addToWishlistDispatch } from "../../redux/actions/wishlistActions";

const SearchProducts = ({ products, wishlistItems, addToWishlist }) => {
  return (
    <div className="search-products-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* featured products */}
            <div className="search-products-wrapper space-mt--30 space-mb-m--20">
              <div className="row">
                {products &&
                  products.map(single => {
                    const wishlistItem = wishlistItems.filter(
                      wishlistItem => wishlistItem.id === single.id
                    )[0];
                    return (
                      <div className="col-6" key={single.id}>
                        <div className="grid-product space-mb--20">
                          <div className="grid-product__image">
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
                            <button
                              className={`icon ${
                                wishlistItem !== undefined ? "active" : ""
                              }`}
                              disabled={wishlistItem !== undefined}
                              onClick={() => addToWishlist(single)}
                            >
                              <ReactSVG src="assets/img/icons/heart-dark.svg" />
                            </button>
                          </div>
                          <div className="grid-product__content">
                            <h3 className="title">
                              <Link
                                to={
                                  process.env.PUBLIC_URL +
                                  `/product/${single.id}`
                                }
                              >
                                {single.name}
                              </Link>
                            </h3>
                            <span className="category">
                              {single.category.map((item, index, arr) => {
                                return (
                                  item + (index !== arr.length - 1 ? ", " : "")
                                );
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

SearchProducts.propTypes = {
  addToWishlist: PropTypes.func,
  products: PropTypes.array,
  wishlistItems: PropTypes.array
};
const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(state.productData.products, ownProps.limit),
    wishlistItems: state.wishlistData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToWishlist: item => {
      dispatch(addToWishlistDispatch(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);
