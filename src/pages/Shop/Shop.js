import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { connect } from "react-redux";
import { ShopProducts } from "../../components";
import {
  toggleShopTopFilter,
  getIndividualCategories,
  getIndividualColors,
  setActiveSort,
  getSortedProducts
} from "../../helpers/product";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "",
      sortValue: "",
      finalSortedProducts: props.products
    };
  }

  getSortParams = (sortType, sortValue) => {
    this.setState({
      sortType,
      sortValue
    });

    let sortedProducts = getSortedProducts(
      this.props.products && this.props.products,
      sortType,
      sortValue
    );
    this.setState({
      finalSortedProducts: sortedProducts
    });
  };

  render() {
    const { products } = this.props;
    const { getSortParams } = this;
    const { finalSortedProducts, sortType, sortValue } = this.state;
    const uniqueCategories = getIndividualCategories(products);
    const uniqueColors = getIndividualColors(products);

    return (
      <div className="body-wrapper space-pt--70 space-pb--120">
        <div className="shop-header bg-color--grey">
          <div className="container space-y--15">
            <div className="row align-items-center">
              <div className="col-3">
                <Link
                  to={process.env.PUBLIC_URL + "/home"}
                  className="back-link"
                >
                  {" "}
                  <FaAngleLeft /> Back
                </Link>
              </div>
              <div className="col-6">
                <h4 className="category-title text-center">
                  {sortType === "category" || ""
                    ? sortValue === ""
                      ? "All Categories"
                      : sortValue
                    : "All Categories"}
                </h4>
              </div>
              <div className="col-3 text-right">
                <button
                  className="filter-trigger"
                  id="filter-trigger"
                  onClick={e => toggleShopTopFilter(e)}
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="shop-filter" id="shop-filter-menu">
            <div className="container space-mt--15 space-mb--50">
              <div className="row">
                <div className="col-12">
                  <div className="shop-filter-block space-mb--25">
                    <h4 className="shop-filter-block__title space-mb--15">
                      Colors
                    </h4>
                    <div className="shop-filter-block__content">
                      {uniqueColors ? (
                        <ul className="shop-filter-block__color">
                          {uniqueColors.map((color, key) => {
                            return (
                              <li key={key}>
                                <button
                                  className={`${color}`}
                                  onClick={e => {
                                    getSortParams("color", color);
                                    setActiveSort(e);
                                  }}
                                ></button>
                              </li>
                            );
                          })}
                          <li>
                            <button
                              onClick={e => {
                                getSortParams("color", "");
                                setActiveSort(e);
                              }}
                            >
                              X
                            </button>
                          </li>
                        </ul>
                      ) : (
                        "No colors found"
                      )}
                    </div>
                  </div>
                  <div className="shop-filter-block">
                    <h4 className="shop-filter-block__title space-mb--15">
                      Categories
                    </h4>
                    <div className="shop-filter-block__content">
                      {uniqueCategories ? (
                        <ul className="shop-filter-block__category">
                          <li>
                            <button
                              onClick={e => {
                                getSortParams("category", "");
                                setActiveSort(e);
                              }}
                            >
                              All
                            </button>
                          </li>
                          {uniqueCategories.map((category, key) => {
                            return (
                              <li key={key}>
                                <button
                                  onClick={e => {
                                    getSortParams("category", category);
                                    setActiveSort(e);
                                  }}
                                >
                                  {category}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        "No categories found"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* shop products */}
        <ShopProducts products={finalSortedProducts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productData.products,
    wishlistItems: state.wishlistData
  };
};

export default connect(mapStateToProps)(Shop);
