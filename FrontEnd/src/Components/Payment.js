import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  fa1,
  fa2,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import SecuityLock from "../Images/Security Lock.png";

const Payment = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [loading, setLoading] = useState(false);

  let history = useNavigate();

  const proceed = () => {
    setTimeout(() => {
      setLoading(true);
    }, 0);
    setTimeout(() => {
      history("/welcome");
    }, 3000);
  };
  const CreditCard = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
  };
  const payPal = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
  };
  const bhimUpi = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
  };

  return (
    <>
      <section style={{ position: "relative" }} className="pt-3 pb-3">
        <div
          className="loading"
          style={{ display: loading ? "block" : "none" }}
        ></div>
        <div>
          <div className="payment_method container-lg p-lg-5 pt-3 pb-3">
            <div className="top_icons">
              <div onClick={CreditCard}>
                <FontAwesomeIcon icon={faCreditCard} />
                <h4>Pay With Credit Card</h4>
                <FontAwesomeIcon
                  style={{ display: isActive1 ? "block" : "none" }}
                  className="visible_icon"
                  icon={faCircleCheck}
                />
              </div>
              <div onClick={payPal}>
                <FontAwesomeIcon icon={faCreditCard} />
                <h4>Pay With Paypal</h4>
                <FontAwesomeIcon
                  style={{ display: isActive2 ? "block" : "none" }}
                  className="visible_icon"
                  icon={faCircleCheck}
                />
              </div>
              <div onClick={bhimUpi}>
                <FontAwesomeIcon icon={faCreditCard} />
                <h4>Pay With Bhim UPI</h4>
                <FontAwesomeIcon
                  style={{ display: isActive3 ? "block" : "none" }}
                  className=""
                  icon={faCircleCheck}
                />
              </div>
            </div>
            <div
              className="creditcard_info"
              style={{ display: isActive1 ? "block" : "none" }}
            >
              <div className="credit_info">
                <form method="POST">
                  <div className="row">
                    <div className="col-6">
                      <div className="billing_info">
                        <FontAwesomeIcon className="one_icon" icon={fa1} />
                        <h4>Billing Info</h4>
                      </div>
                      <div>
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" required />
                      </div>
                      <div>
                        <label htmlFor="address">Billing Address</label>
                        <input type="text" id="address" required />
                        <div>
                          <label htmlFor="city">City</label>
                          <input type="text" id="city" required />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="zipcode">Zip Code</label>
                          <input type="number" id="zipcode" required />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" required />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="billing_info">
                        <FontAwesomeIcon className="one_icon" icon={fa2} />
                        <h4>Credit Card Info</h4>
                      </div>
                      <div>
                        <label htmlFor="cardname">CardHolder's Name</label>
                        <input type="text" id="cardname" required />
                      </div>
                      <div>
                        <label htmlFor="cardnumber">Card Number</label>
                        <input type="number" id="cardnumber" required />
                      </div>
                      <div>
                        <label htmlFor="expmonth">Exp. Month</label>
                        <input type="text" id="expmonth" required />
                      </div>
                      <div>
                        <label htmlFor="expyear">Exp. Year</label>
                        <input type="text" id="expyear" required />
                      </div>
                      <div>
                        <label htmlFor="cvcnumber">CVC Number</label>
                        <input
                          type="tel"
                          id="cvcnumber"
                          required
                          maxLength={3}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="footer_form">
                    <NavLink to="/">
                      <Button>Return To Home</Button>
                    </NavLink>
                    <Button onClick={proceed} type="submit">
                      Proceed
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="paypal_info"
              style={{ display: isActive2 ? "block" : "none" }}
            >
              <div className="credit_info">
                <form method="POST">
                  <div
                    className="row"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="col-6">
                      <div className="billing_info">
                        <FontAwesomeIcon className="one_icon" icon={fa1} />
                        <h4>Billing Info</h4>
                      </div>
                      <div>
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" required />
                      </div>
                      <div>
                        <label htmlFor="cardnumber">Card Number</label>
                        <input type="number" id="cardnumber" required />
                      </div>
                      <div>
                        <label htmlFor="expmonth">Exp. Month</label>
                        <input type="text" id="expmonth" required />
                      </div>
                      <div>
                        <label htmlFor="expyear">Exp. Year</label>
                        <input type="text" id="expyear" required />
                      </div>
                      <div>
                        <label htmlFor="cvcnumber">CVC Number</label>
                        <input
                          type="tel"
                          id="cvcnumber"
                          required
                          maxLength={3}
                        />
                      </div>
                    </div>
                    <div className="col-6 paypal_right_info">
                      <img
                        className="security_image"
                        src={SecuityLock}
                        alt="paypal_image"
                      />
                      <h3>PayPal is the safer , faster way to pay</h3>
                      <p>
                        No matter where you shop , we help keep your financial
                        information secure.
                      </p>
                    </div>
                  </div>
                  <div className="footer_form">
                    <NavLink to="/">
                      <Button>Return To Home</Button>
                    </NavLink>
                    <Button onClick={proceed} type="submit">
                      Proceed
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="bhimupi_info"
              style={{ display: isActive3 ? "block" : "none" }}
            >
              <div className="credit_info">
                <form method="POST">
                  <div
                    className="row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "33%",
                      margin: "auto",
                    }}
                  >
                    <div>
                      <label htmlFor="upi">Ente Your UPI ID</label>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <input className="me-3" type="text" id="upi" required />
                        <Button type="button" className="mb-2">
                          Verify
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" required />
                    </div>
                  </div>
                  <div className="footer_form">
                    <NavLink to="/">
                      <Button>Return To Home</Button>
                    </NavLink>
                    <Button onClick={proceed} type="submit">
                      Proceed
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
