import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { getDiscountPrice } from "../../helpers/product";
import { addToWishlistDispatch } from "../../redux/actions/wishlistActions";

class ShopProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridActivate: true,
      listActivate: false
    };

    this.setGridActive = this.setGridActive.bind(this);
    this.setListActive = this.setListActive.bind(this);
  }

  setGridActive() {
    this.setState({
      gridActivate: true,
      listActivate: false
    });
  }

  setListActive() {
    this.setState({
      gridActivate: false,
      listActivate: true
    });
  }

  render() {
    const { products, wishlistItems, addToWishlist } = this.props;
    const { gridActivate, listActivate } = this.state;
    const { setGridActive, setListActive } = this;
    return (
      <div className="shop-products-area">
        {/* shop layout switcher */}
        <div className="shop-layout-switcher text-right space-mt--15 space-mb--15">
          <div className="container">
            <button
              className={`${gridActivate ? "active" : ""}`}
              onClick={() => setGridActive()}
            >
              <ReactSVG
                src={process.env.PUBLIC_URL + "/assets/img/icons/grid.svg"}
              />
            </button>
            <button
              className={`${listActivate ? "active" : ""}`}
              onClick={() => setListActive()}
            >
              <ReactSVG
                src={process.env.PUBLIC_URL + "/assets/img/icons/list.svg"}
              />
            </button>
          </div>
        </div>

        {/* shop grid products */}
        <div
          className={`shop-grid-products-wrapper space-mb-m--20 ${
            gridActivate ? "d-block" : "d-none"
          }`}
        >
          <div className="container">
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
                                process.env.PUBLIC_URL + `/product/${single.id}`
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

        {/* shop list products */}
        <div
          className={`shop-list-products-wrapper ${
            listActivate ? "d-block" : "d-none"
          }`}
        >
          {products &&
            products.map(single => {
              const wishlistItem = wishlistItems.filter(
                wishlistItem => wishlistItem.id === single.id
              )[0];
              return (
                <div
                  className="list-product border-bottom--medium"
                  key={single.id}
                >
                  <button
                    className={`icon ${
                      wishlistItem !== undefined ? "active" : ""
                    }`}
                    disabled={wishlistItem !== undefined}
                    onClick={() => addToWishlist(single)}
                  >
                    <ReactSVG src="assets/img/icons/heart-dark.svg" />
                  </button>
                  <div className="list-product__image">
                    <Link to={process.env.PUBLIC_URL + `/product/${single.id}`}>
                      <img
                        src={process.env.PUBLIC_URL + single.image[0]}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="list-product__content">
                    <h3 className="title">
                      <Link
                        to={process.env.PUBLIC_URL + `/product/${single.id}`}
                      >
                        {single.name}
                      </Link>
                    </h3>
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
                    <p>{single.shortDescription}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

ShopProducts.propTypes = {
  addToWishlist: PropTypes.func,
  products: PropTypes.array,
  wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopProducts);
