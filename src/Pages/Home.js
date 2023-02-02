import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, FreeMode, EffectCoverflow } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faApple, faSlack } from "@fortawesome/free-brands-svg-icons";
import Banner_1 from "../Images/Layer 2.png";
import Banner_2 from "../Images/Layer 1.png";
import Banner_3 from "../Images/Layer 15.png";
import Bg_1 from "../Images/bg -4.png";
import Banner_4 from "../Images/Layer 16.png";
import mobile1 from "../Images/Layer 4.png";
import mobile2 from "../Images/Layer 5.png";
import mobile3 from "../Images/Layer 6.png";
import mobile4 from "../Images/Layer 7.png";
import mobile5 from "../Images/Layer 8.png";
import Apple_logo from "../Images/Apple.png";
import samsung_logo from "../Images/Samsung.png";
import onePlus_logo from "../Images/OnePlus.png";
import realme_logo from "../Images/realme.png";
import mi_logo from "../Images/mi-logo.png";
import lenovo_logo from "../Images/lenovo-logo-red.webp";
import asus_logo from "../Images/Asus.png";
import poco_logo from "../Images/poco-logo-new.png";

const Home = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

  const Samsung = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
  };
  const redmi = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
  };
  const oneplus = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setIsActive4(false);
    setIsActive5(false);
  };
  const realme = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(true);
    setIsActive5(false);
  };
  const poco = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(true);
  };

  return (
    <>
      <section className="banner">
        <Swiper
          navigation={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="main-banner">
              <div className="container">
                <div className="row  custom-row">
                  <div className="col-md-4 col-12 order-md-1 order-2">
                    <div className="banner-text">
                      <h3 style={{ fontSize: "35px" }}>iPhone 14 Pro</h3>
                      <h1
                        style={{ fontSize: "65px" }}
                        className="pro-text mb-3"
                      >
                        Pro. Beyond.
                      </h1>
                      <button className="btn-1" type="button">
                        with superfast 5G
                      </button>
                      <p>
                        From{" "}
                        <FontAwesomeIcon
                          style={{ fontSize: "12px" }}
                          icon={faIndianRupeeSign}
                        />
                        1,39,900*{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-8 col-12 order-md-2 order-1 img">
                    <img className="banner-2" src={Banner_2} />
                    <img className="banner-1" src={Banner_1} />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="main-banner-2">
              <div className="container">
                <div className="row  custom-row-2">
                  <div className="col-md-6 col-12 order-md-1 order-2">
                    <div className="banner-text">
                      <h1
                        style={{ fontSize: "65px" }}
                        className="pro-text mb-3"
                      >
                        Neo QLED 8K
                      </h1>
                      <p>
                        From{" "}
                        <FontAwesomeIcon
                          style={{ fontSize: "12px" }}
                          icon={faIndianRupeeSign}
                        />
                        1,79,999*{" "}
                      </p>
                      <button className="btn-1" type="button">
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 order-md-2 order-1 img">
                    <img className="banner-3" src={Banner_3} />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="main-banner-3">
              <div className="container">
                <div className="row  custom-row-3">
                  <div className="col-md-6 col-12 order-md-1 order-2">
                    <div className="banner-text">
                      <h1
                        style={{ fontSize: "65px" }}
                        className="pro-text mb-3"
                      >
                        AirPods Max
                      </h1>
                      <p>
                        From{" "}
                        <FontAwesomeIcon
                          style={{ fontSize: "12px" }}
                          icon={faIndianRupeeSign}
                        />
                        59,999*{" "}
                      </p>
                      <button className="btn-1" type="button">
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 order-md-2 order-1">
                    <img className="banner-4" src={Banner_4} />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="mobiles_section">
        <section
          className="home_mobiles"
          style={{
            display: isActive1 ? "block" : "none",
          }}
        >
          <div className="container custom_container">
            <div className="nav-mobiles">
              <h4
                style={{
                  color: isActive1 ? "red" : "black",
                }}
                onClick={Samsung}
              >
                Galexy Z Flip4
              </h4>
              <h4 onClick={redmi}>Xiaomi 12 Pro</h4>
              <h4 onClick={oneplus}>OnePlus 10 Pro</h4>
              <h4 onClick={realme}>realme 10</h4>
              <h4 onClick={poco}>POCO F4 5G</h4>
            </div>
            <div className="row custom-row">
              <div className="col-6">
                <div className="image-text">
                  <h2 className="mb-3">Galexy Z Flip4 </h2>
                  <p className="mb-3">
                    Starting{" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "14px" }}
                      icon={faIndianRupeeSign}
                    />
                    80,999*
                  </p>
                  <button type="button" className="btn-1">
                    Buy Now
                  </button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="col-6">
                <img src={mobile1} alt="Image_Not_Found" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="home_mobiles background-1"
          style={{
            display: isActive2 ? "block" : "none",
          }}
        >
          <div className="container custom_container">
            <div className="nav-mobiles">
              <h4 onClick={Samsung}>Galexy Z Flip4</h4>
              <h4
                onClick={redmi}
                style={{
                  color: isActive2 ? "red" : "black",
                }}
              >
                Xiaomi 12 Pro
              </h4>
              <h4 onClick={oneplus}>OnePlus 10 Pro</h4>
              <h4 onClick={realme}>realme 10</h4>
              <h4 onClick={poco}>POCO F4 5G</h4>
            </div>
            <div className="row custom-row">
              <div className="col-6">
                <div className="image-text">
                  <h2 className="mb-3">Xiaomi 12 Pro</h2>
                  <p className="mb-3">
                    Starting{" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "14px" }}
                      icon={faIndianRupeeSign}
                    />
                    55,999*
                  </p>
                  <button type="button" className="btn-1">
                    Buy Now
                  </button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="col-6">
                <img className="img" src={mobile2} alt="Image_Not_Found" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="home_mobiles background-2"
          style={{
            display: isActive3 ? "block" : "none",
          }}
        >
          <div className="container custom_container">
            <div className="nav-mobiles">
              <h4 onClick={Samsung}>Galexy Z Flip4</h4>
              <h4 onClick={redmi}>Xiaomi 12 Pro</h4>
              <h4
                onClick={oneplus}
                style={{
                  color: isActive3 ? "red" : "black",
                }}
              >
                OnePlus 10 Pro
              </h4>
              <h4 onClick={realme}>realme 10</h4>
              <h4 onClick={poco}>POCO F4 5G</h4>
            </div>
            <div className="row custom-row">
              <div className="col-6">
                <div className="image-text">
                  <h2 className="mb-3">OnePlus 10 Pro 5G</h2>
                  <p className="mb-3">
                    Starting{" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "14px" }}
                      icon={faIndianRupeeSign}
                    />
                    61,999*
                  </p>
                  <button type="button" className="btn-1">
                    Buy Now
                  </button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="col-6">
                <img className="img" src={mobile3} alt="Image_Not_Found" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="home_mobiles background-3"
          style={{
            display: isActive4 ? "block" : "none",
          }}
        >
          <div className="container custom_container">
            <div className="nav-mobiles text-white">
              <h4 onClick={Samsung}>Galexy Z Flip4</h4>
              <h4 onClick={redmi}>Xiaomi 12 Pro</h4>
              <h4 onClick={oneplus}>OnePlus 10 Pro</h4>
              <h4
                onClick={realme}
                style={{
                  color: isActive4 ? "red" : "black",
                }}
              >
                realme 10
              </h4>
              <h4 onClick={poco}>POCO F4 5G</h4>
            </div>
            <div className="row custom-row">
              <div className="col-6">
                <div className="image-text text-white">
                  <h2 className="mb-3">realme 10</h2>
                  <p className="mb-3">
                    Starting{" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "14px" }}
                      icon={faIndianRupeeSign}
                    />
                    13,999*
                  </p>
                  <button type="button" className="btn-1">
                    Buy Now
                  </button>
                  <a href="" className="text-white">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-6">
                <img className="img-1" src={mobile4} alt="Image_Not_Found" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="home_mobiles background-4"
          style={{
            display: isActive5 ? "block" : "none",
          }}
        >
          <div className="container custom_container">
            <div className="nav-mobiles text-white">
              <h4 onClick={Samsung}>Galexy Z Flip4</h4>
              <h4 onClick={redmi}>Xiaomi 12 Pro</h4>
              <h4 onClick={oneplus}>OnePlus 10 Pro</h4>
              <h4 onClick={realme}>realme 10</h4>
              <h4
                onClick={poco}
                style={{
                  color: isActive5 ? "red" : "black",
                }}
              >
                POCO F4 5G
              </h4>
            </div>
            <div className="row custom-row">
              <div className="col-6">
                <div className="image-text text-white">
                  <h2 className="mb-3">POCO F4 5G</h2>
                  <p className="mb-3">
                    Starting{" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "14px" }}
                      icon={faIndianRupeeSign}
                    />
                    27,999*
                  </p>
                  <button type="button" className="btn-1">
                    Buy Now
                  </button>
                  <a href="" className="text-white">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-6">
                <img className="img-2" src={mobile5} alt="Image_Not_Found" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="mobile_brands pt-5 pb-5 bg-white">
        <div className="container custom_container">
          <Swiper
            modules={[Navigation, Autoplay, FreeMode, EffectCoverflow]}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
            freeMode={true}
            breakpoints={{
              575 : {
                slidesPerView : 3
              },
              767 : {
                slidesPerView : 5
              }

            }}
          >
            <SwiperSlide>
              <div className="sam">
                <img className="apple ani" src={Apple_logo} alt="Samsung_logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sam">
                <img
                  className="samsung ani"
                  src={samsung_logo}
                  alt="Samsung_logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sam">
                <img
                  className="oneplus ani"
                  src={onePlus_logo}
                  alt="Samsung_logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sam">
                <img className="realme ani" src={realme_logo} alt="Samsung_logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sam">
                <img className="mi ani" src={mi_logo} alt="Samsung_logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sam">
                <img className="lenovo ani" src={lenovo_logo} alt="Samsung_logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sam">
                <img className="asus ani" src={asus_logo} alt="Samsung_logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sam">
                <img className="poco ani" src={poco_logo} alt="Samsung_logo" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="home_accessories">
        <div className="container">
          
        </div>
      </section>
    </>
  );
};

export default Home;
