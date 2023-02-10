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

const Mobile = () => {
  const { isLoading, products } = useProductContext();
  const [gRow, setGRow] = useState(false);
  const [gColumn, setGColumn] = useState(true);


  if (isLoading) {
    return <div>....Loading</div>;
  }

  const gridRow = () => {
    setGRow(true);
    setGColumn(false)
  };
  const gridColumn = () => {
    setGColumn(true);
    setGRow(false);
  };

  return (
    
    <>
      <section className="container grid_system">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          <div>
            <BreadCrumb to="/mobile" name="Mobile" />
          </div>
          <div>
            <FontAwesomeIcon
              onClick={gridRow}
              style={{
                marginRight: "15px",
                fontSize: "25px",
                cursor : "pointer"
              }}
              icon={faBars}
            />
            <FontAwesomeIcon
              onClick={gridColumn}
              style={{
                fontSize: "25px",
                marginRight: "10px",
                cursor: "pointer"
              }}
              icon={faGripLinesVertical}
            />
          </div>
        </div>
      </section>
      <section className="mobile_page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Filter />
            </div>
            <div className="custom-row col-10" style={{display : gColumn ? "grid" : "flex" , gridTemplateColumns : gColumn ? "4fr 4fr 4fr 4fr" : "none"}}>
              {products.map((curEle) => {
                return (
                  <> 
                  <NavLink to={`/singleproduct/${curEle.id}`} style={{textDecoration : "none"}} key={curEle.id}>
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
                            {curEle.specification.map((event) => {
                              return (
                                <>
                                  <li>{event.ROM}</li>
                                  <li>{event.Display}</li>
                                  <li>{event.Camera}</li>
                                  <li>{event.Processor}</li>
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

      {/* <section className="container grid_system">
        <div
          style={{

            display: "flex",
            justifyContent:"space-between",
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
        <div>
            <BreadCrumb to="/mobile" name = "Mobile" />
        </div>
          <div>
          <FontAwesomeIcon
            onClick={gridRow}
            style={{ marginRight: "15px", fontSize: "25px", cursor: "pointer" }}
            icon={faBars}
          />
          <FontAwesomeIcon
            onClick={gridColumn}
            style={{ fontSize: "25px", marginRight: "10px", cursor: "pointer" }}
            icon={faGripLinesVertical}
          />
          </div>
        </div>
      </section>
      <section className="mobile_page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Filter />
            </div>
            <div className="custom-row col-10">
              {data.map((e) => {
                return (
                  <>
                    <div
                      className={`${
                        gRow
                          ? "col-12 d-flex align-items-center text-start"
                          : "col-3 text-center"
                      } p-3 custom-col `}
                    >
                      <img
                        src={e.image}
                        style={{
                          width: gRow ? "30%" : "100%",
                          marginRight: gRow ? "30px" : "0",position:"relative"
                        }}
                        alt={e.alt}
                      />
                      <div>
                        <div>
                          <h4 style={{ fontSize: gRow ? "24px" : "16px" }}>
                            {e.mobilename}
                          </h4>
                          <h6>{e.Brand}</h6>
                          <h5>
                            <FontAwesomeIcon icon={faRupeeSign} /> {e.price}
                          </h5>
                          <ul
                            className="fs-5"
                            style={{
                              display: gRow ? "block" : "none",
                              marginLeft: "-11px",
                            }}
                          >
                            {e.specification.map((event) => {
                              return (
                                <>
                                  <li>{event.ROM}</li>
                                  <li>{event.Display}</li>
                                  <li>{event.Camera}</li>
                                  <li>{event.Processor}</li>
                                </>
                              );
                            })}
                          </ul>
                          <Button>Buy Now</Button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Mobile;
