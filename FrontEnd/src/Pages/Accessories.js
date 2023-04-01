import React, { useContext, useEffect, useState } from "react";
import Filter from "../Components/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faBars,
  faGripLinesVertical,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Image1 from "../Images/Apple.png";
import { Card, Button } from "react-bootstrap";
import BreadCrumb from "../Components/BreadCrumb";
import { AppContext, useProductContext } from "../Context/ProductContext";
import { NavLink } from "react-router-dom";
import SearchProduct from "../Components/SearchProduct";
import { useFilterContext } from "../Context/FilterContext";

const Accessories = () => {
  const [text, setText] = useState("");
  const { isLoading, productsAccessories } = useProductContext();
  const [gRow, setGRow] = useState(false);
  const [gColumn, setGColumn] = useState(true);
  //   const { text, updateFilterValue } = useFilterContext();

  if (isLoading) {
    return <div>....Loading</div>;
  }

  const gridRow = () => {
    setGRow(true);
    setGColumn(false);
  };
  const gridColumn = () => {
    setGColumn(true);
    setGRow(false);
  };

  return (
    <>
      <section className="  bg-dark">
        <div className="container-lg grid_system">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            <div>
              <BreadCrumb to="/accessories" name="Accessories" />
            </div>
            <div>
              <SearchProduct
                val={text}
                change={(e) => {
                  setText(e.target.value);
                }}
              />
            </div>
            <div className="grid_view_section">
              <FontAwesomeIcon
                onClick={gridRow}
                style={{
                  marginRight: "15px",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
                icon={faBars}
              />
              <FontAwesomeIcon
                onClick={gridColumn}
                style={{
                  fontSize: "25px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                icon={faGripLinesVertical}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mobile_page">
        <div className="container-lg">
          <div className="row">
            <div className="col-2">
              <Filter />
            </div>
            <div
              className="custom-row col-sm-10 col-12"
              style={{
                display: gColumn ? "grid" : "flex",
                gridTemplateColumns: gColumn ? "4fr 4fr 4fr 4fr" : "none",
              }}
            >
              {productsAccessories
                .filter((cur) => {
                  if (text == "") {
                    return cur;
                  } else if (
                    cur.Brand.toLowerCase().includes(text.toLowerCase()) ||
                    cur.mobilename.toLowerCase().includes(text.toLowerCase())
                  ) {
                    return cur;
                  }
                })
                .map((curEle, val) => {
                  return (
                    <>
                      <NavLink
                        to={`/singleproductaccessories/${curEle.id}/${curEle.mobilename}`}
                        style={{ textDecoration: "none" }}
                        key={val}
                      >
                        <div
                          className={`${
                            gRow
                              ? "col-12 d-flex align-items-center text-start"
                              : "text-center"
                          } p-3 custom-col text-black `}
                        >
                          <img
                            src={curEle.image}
                            style={{
                              width: gRow ? "30%" : "100%",
                              marginRight: gRow ? "30px" : "0",
                              position: "relative",
                            }}
                            alt={curEle.alt}
                          />
                          <div>
                            <div>
                              <h4 style={{ fontSize: gRow ? "24px" : "16px" }}>
                                {curEle.mobilename}
                              </h4>
                              <h6>{curEle.Brand}</h6>
                              <h5>
                                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                                {curEle.price}
                              </h5>
                              <ul
                                className="fs-5"
                                style={{
                                  display: gRow ? "block" : "none",
                                  marginLeft: "-11px",
                                }}
                              >
                                {curEle.specification.map((event, index) => {
                                  return (
                                    <>
                                      <div key={index}>
                                        <li>{event.ROM}</li>
                                        <li>{event.Display}</li>
                                        <li>{event.Camera}</li>
                                        <li>{event.Processor}</li>
                                      </div>
                                    </>
                                  );
                                })}
                              </ul>
                              <Button>Buy Now</Button>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Accessories;
