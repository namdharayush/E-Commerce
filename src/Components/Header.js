import React from "react";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faCodeCompare,
  faCartShopping,
  faUserPlus,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <>
      <section className="header-1">
        <div className="top-header container-lg">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/mobile'>
                      Mobiles
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/tablet'>
                      Tablets
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/accessories'>
                      Accessories
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/'>
                      Support
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="logo">
            <img src="" alt="logo" />
            <h2>Logo</h2>
          </div>
          <div className="input-group search-input">
            <input
              type="text"
              className="form-control input"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text" id="basic-addon1">
              <FaSearch className="search-icon" />
            </span>
          </div>
          <div className="right-content">
            <div
              className="com-product "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faCodeCompare} />
              <h3>Compare Products</h3>
            </div>
            <div
              className="wishlist"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
              <h3>Favourite wishlist</h3>
            </div>
            <div
              className="log-in"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faUserPlus} />
              <NavLink to="/log-in" style={{color:'black' , textDecoration : "none"}}><h3>Log in My Account</h3></NavLink>
            </div>
            <div className="add-to-cart">
              <FontAwesomeIcon
                style={{ fontSize: "25px" }}
                icon={faCartShopping}
              />
            </div>
          </div>
          
        </div>
      </section>
      <section className="header-2 ">
        <div className="container">
          <div className="Nav-link text-center p-3">
            <NavLink
              style={{
                marginRight: "30px",
                fontSize: "18px",
                textDecoration: "none",
                color: "black",
                fontWeight: "500",
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{
                marginRight: "30px",
                fontSize: "18px",
                textDecoration: "none",
                color: "black",
                fontWeight: "500",
              }}
              to="/mobile"
            >
              Mobiles
            </NavLink>
            <NavLink
              style={{
                marginRight: "30px",
                fontSize: "18px",
                textDecoration: "none",
                color: "black",
                fontWeight: "500",
              }}
              to="/tablet"
            >
              Tablets
            </NavLink>
            <NavLink
              style={{
                marginRight: "30px",
                fontSize: "18px",
                textDecoration: "none",
                color: "black",
                fontWeight: "500",
              }}
              to="/accessories"
            >
              Accessories
            </NavLink>
            <NavLink
              style={{
                marginRight: "30px",
                fontSize: "18px",
                textDecoration: "none",
                color: "black",
                fontWeight: "500",
              }}
              to="/"
            >
              Support
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
