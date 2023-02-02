import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faCcVisa,
  faCcAmazonPay,
  faCcPaypal,
  faCcMastercard,
  faCcApplePay
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="custom-col">
              <h3>Contact US</h3>
              <div>
                <h4>Store</h4>
                <p>133,Vastral,Ahmedabd</p>
                <p>+91 123456789</p>
                <p>store@Contact</p>
              </div>
              <div className="contact-icons">
                <FontAwesomeIcon
                  style={{ marginRight: "10px", fontSize: "20px" }}
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  style={{ marginRight: "10px", fontSize: "20px" }}
                  icon={faFacebook}
                />
                <FontAwesomeIcon
                  style={{ marginRight: "10px", fontSize: "20px" }}
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  style={{ marginRight: "10px", fontSize: "20px" }}
                  icon={faYoutube}
                />
              </div>
              </div>
            </div>
            <div className="col-4 ">
              <div className="custom-col">
              <h3>Information</h3>
              <div className="information">
                <div>
                  <NavLink className="navlink" to="/privacy-policy">
                    Privacy Policy
                  </NavLink>
                </div>
                <div>
                  <NavLink className="navlink" to="/refund-policy">
                    Refund Policy
                  </NavLink>
                </div>
                <div>
                  <NavLink className="navlink" to="/shopping-policy">
                    Shopping Policy
                  </NavLink>
                </div>
                <div>
                  <NavLink className="navlink" to="/term-of-service">
                    Terms of Service
                  </NavLink>
                </div>
              </div>
              </div>
            </div>
            <div className="col-4">
              <div className="custom-col">
              <h3>Quick Links</h3>
              <div className="quickLinks">
                <div>
                  <NavLink className="navlink" to="/mobile">
                    Mobiles
                  </NavLink>
                </div>
                <div>
                  <NavLink className="navlink" to="/tablet">
                    Tablet
                  </NavLink>
                </div>
                <div>
                  <NavLink className="navlink" to="/accessories">
                    Accessories
                  </NavLink>
                </div>
                <div>
                  <NavLink className="navlink" to="/support">
                    Support
                  </NavLink>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">
                <p>&copy;{new Date().getFullYear()} ayush anmdhar</p>
            </div>
            <div className="footer-icons">
                <FontAwesomeIcon style={{ marginRight: "10px", fontSize: "20px" }} icon={faCcVisa}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ marginRight: "10px", fontSize: "20px" }} icon={faCcAmazonPay}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ marginRight: "10px", fontSize: "20px" }} icon={faCcMastercard}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ marginRight: "10px", fontSize: "20px" }} icon={faCcPaypal}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ marginRight: "10px", fontSize: "20px" }} icon={faCcApplePay}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
