import React, { Component, Fragment } from "react";
import axios from "axios";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import ErrorMessage from "../ErrorMessage";
import Preloader from "../Preloader";

class CategorySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      isLoading: true,
      errorMessage: null
    };
  }

  componentDidMount() {
    this.getCategoryData();
  }

  getCategoryData() {
    axios
      .get(process.env.PUBLIC_URL + "/data/category.json")
      .then(response =>
        this.setState({ categoryData: response.data, isLoading: false })
      )
      .catch(error =>
        this.setState({ errorMessage: error.message, isLoading: false })
      );
  }

  render() {
    const { categoryData, isLoading, errorMessage } = this.state;
    let content;

    const params = {
      spaceBetween: 15,
      breakpoints: {
        370: {
          slidesPerView: 5
        },
        320: {
          slidesPerView: 3
        }
      }
    };

    if (isLoading) {
      content = <Preloader />;
    } else {
      if (errorMessage) {
        content = <ErrorMessage errorMessage={errorMessage} />;
      } else {
        content = (
          <div className="category-slider-area bg-color--grey space-pb--25 space-mb--25">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* section title */}
                  <h2 className="section-title space-mt--10 space-mb--20">
                    Categories
                  </h2>
                  {/* category slider */}
                  <div className="category-slider-wrapper">
                    <Swiper {...params}>
                      {categoryData &&
                        categoryData.map(single => {
                          return (
                            <div key={single.id}>
                              <div className="category-item swiper-slide">
                                <div className="category-item__image">
                                  <Link
                                    to={process.env.PUBLIC_URL + single.url}
                                  >
                                    <ReactSVG
                                      src={
                                        process.env.PUBLIC_URL + single.image
                                      }
                                    />
                                  </Link>
                                </div>
                                <div className="category-item__title">
                                  <Link
                                    to={process.env.PUBLIC_URL + single.url}
                                  >
                                    {single.name}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return <Fragment>{content}</Fragment>;
  }
}

export default CategorySlider;
