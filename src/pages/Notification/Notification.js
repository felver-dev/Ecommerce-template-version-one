import React, { Component, Fragment } from "react";
import { ReactSVG } from "react-svg";
import axios from "axios";
import { Preloader, ErrorMessage, Breadcrumb } from "../../components";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      isLoading: true,
      errorMessage: null
    };
  }

  componentDidMount() {
    this.getNotifications();
  }

  getNotifications() {
    axios
      .get(process.env.PUBLIC_URL + "/data/notification.json")
      .then(response =>
        this.setState({
          notifications: response.data,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({ errorMessage: error.message, isLoading: false })
      );
  }

  render() {
    const { notifications, isLoading, errorMessage } = this.state;
    let content;
    if (isLoading) {
      content = <Preloader />;
    } else {
      if (errorMessage) {
        content = <ErrorMessage errorMessage={errorMessage} />;
      } else {
        content = (
          <div className="body-wrapper space-pt--70 space-pb--120">
            <Breadcrumb pageTitle="Notification" prevUrl="/home" />
            <div className="notification-wrapper">
              {notifications &&
                notifications.map(single => {
                  return (
                    <div
                      className={`notification-item ${
                        single.unread ? "notification-item--unread" : ""
                      }`}
                      key={single.id}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: single.notificationContent
                        }}
                      />
                      <div className="notification-item__time">
                        {" "}
                        <span>
                          <ReactSVG
                            src={
                              process.env.PUBLIC_URL +
                              "assets/img/icons/notification.svg"
                            }
                          />
                        </span>{" "}
                        {single.notificationTime}
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

export default Notification;
