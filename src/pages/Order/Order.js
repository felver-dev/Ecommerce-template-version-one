import React, { Component, Fragment } from "react";
import axios from "axios";
import { Preloader, ErrorMessage, Breadcrumb } from "../../components";
import { FaRegCheckCircle, FaRegTimesCircle, FaRedo } from "react-icons/fa";
import { getDiscountPrice } from "../../helpers/product";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      isLoading: true,
      errorMessage: null
    };
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders() {
    axios
      .get(process.env.PUBLIC_URL + "/data/order.json")
      .then(response =>
        this.setState({
          orders: response.data,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({ errorMessage: error.message, isLoading: false })
      );
  }

  render() {
    const { orders, isLoading, errorMessage } = this.state;
    let content;
    if (isLoading) {
      content = <Preloader />;
    } else {
      if (errorMessage) {
        content = <ErrorMessage errorMessage={errorMessage} />;
      } else {
        content = (
          <div className="body-wrapper space-pt--70 space-pb--120">
            <Breadcrumb pageTitle="Orders" prevUrl="/home" />
            <div className="order-product-area">
              {orders &&
                orders.map(single => {
                  return (
                    <div
                      className="cart-product border-bottom--medium"
                      key={single.id}
                    >
                      <div className="cart-product__image">
                        <img
                          src={process.env.PUBLIC_URL + single.productImage}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="cart-product__content">
                        <h3 className="title">{single.productTitle}</h3>
                        <span className="category">
                          {single.productCategory}
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
                        <p>
                          <span>
                            {single.orderStatus === "completed" ? (
                              <FaRegCheckCircle />
                            ) : single.orderStatus === "cancelled" ? (
                              <FaRegTimesCircle />
                            ) : (
                              <FaRedo />
                            )}
                          </span>{" "}
                          {single.orderStatus}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      }
    }
    return <Fragment>{content}</Fragment>;
  }
}

export default Order;
