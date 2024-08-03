import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Offcanvas from "./Offcanvas";
import SearchKeywords from "./SearchKeywords";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateOffcanvas: false,
      activateSearch: false
    };
    this.getMenuActiveStatus = this.getMenuActiveStatus.bind(this);
  }

  handleClickOffcanvas(e) {
    e.preventDefault();
    this.setState({ activateOffcanvas: !this.state.activateOffcanvas });
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({ activateSearch: !this.state.activateSearch });
  }

  getMenuActiveStatus(status) {
    this.setState({
      activateOffcanvas: status
    });
  }

  render() {
    return (
      <header>
        <div className="header-wrapper border-bottom">
          <div className="container space-y--15">
            <div className="row align-items-center">
              <div className="col-auto">
                {/* header logo */}
                <div className="header-logo">
                  <Link to={process.env.PUBLIC_URL + "/home"}>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                {/* header search */}
                <div className="header-search">
                  <form>
                    <input
                      type="text"
                      onClick={e => this.handleSearch(e)}
                      placeholder="Search anything"
                    />
                    <ReactSVG
                      src={
                        process.env.PUBLIC_URL + "/assets/img/icons/search.svg"
                      }
                    />
                  </form>
                </div>
              </div>
              <div className="col-auto">
                {/* header menu trigger */}
                <button
                  className="header-menu-trigger"
                  onClick={e => this.handleClickOffcanvas(e)}
                >
                  <ReactSVG
                    src={process.env.PUBLIC_URL + "/assets/img/icons/menu.svg"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* search keywords */}
        <SearchKeywords show={this.state.activateSearch} />
        {/* offcanvas menu */}
        <Offcanvas
          show={this.state.activateOffcanvas}
          activeStatus={this.getMenuActiveStatus}
        />
      </header>
    );
  }
}

export default Header;
