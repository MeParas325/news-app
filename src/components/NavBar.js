import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {

  handleClick (){
    let data = fetch(`https://newsapi.org/v2/top-headlines?country=${this?.props?.country}&category=${this?.props?.category}&apiKey=3671f58f31eb4c94acfb56fe503a617b&pageSize=20`);
    // console.log(typeof data)
    // console.log(data)
    let parsedData =  data?.json()
    // console.log(typeof parsedData)
    // console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parseInt(parsedData.totalResults)
      
    })
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              News Monkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}
                    onClick={this.handleClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/business"} onClick={this.handleClick}>
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/entertainment"} onClick={this.handleClick}>
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/health"} onClick={this.handleClick}>
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/science"} onClick={this.handleClick}>
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sports"} onClick={this.handleClick}>
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/technology"} onClick={this.handleClick}>
                    Technolody
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={`form-check form-switch`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
