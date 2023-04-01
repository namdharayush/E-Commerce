import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useParams ,NavLink } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import { Button } from "react-bootstrap";
import BreadCrumb from "./BreadCrumb";
import AddToCart from "./AddToCart";
import { useCartContext } from "../Context/CartContext";

const API = "http://localhost:4700/accessories";

const SingleProductAccessories = () => {
  // const {amount, cart } = useCartContext();
  const { singleProduct, getSingleProduct, isSingleLoading } =
    useProductContext();
  const { id } = useParams();
  
  let description =
  singleProduct[0].description !== undefined
  ? singleProduct[0].description[0]
  : "Not Found";
  const {
    mobilename,
    stock,
    Brand,
    price,
    image_2,
    image,
    image_3,
    image_4,
    stars,
  } = singleProduct[0];

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  const  handlePaymentClick = async () => {

    const result  = await fetch("http://localhost:8000/razorpay" , {
        method : "POST",
    })
    // if (!result) {
    //     alert("Server error. Are you online?");
    //     return;
    // }   

    const options = {
        key: "rzp_test_86nItSyslS9CDq",
        amount:price*100,
        // currency: result.currency,
        name: "Easy Electronics",
        description: "Test Transaction",
        // order_id: result.order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: response.order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            }
        }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

  return (
    <>
      <div className="single_product">
        <div className="row">
          <div className="col-2 single_product_add">
            <h1></h1>
          </div>
          <div className="col-md-10 col-12 pt-sm-3 ">
            <div className="row custom-row">
              <div className="col-sm-6 col-12">
                <img
                  style={{
                    width: "82%",
                    height: "500px",
                    objectFit: "contain",
                  }}
                  src={image}
                  alt="Not Found"
                />
              </div>
              <div className="col-sm-6 col-12">
                <BreadCrumb
                  to="/tablet"
                  name="Tablets"
                  productName={mobilename}
                  id={id}
                />
                <h3 style={{ marginTop: "10px" }}>{mobilename}</h3>
                <h5 className="mb-3" style={{ fontWeight: "450" }}>
                  <span>stars : {stars}</span>
                </h5>
                <h5 className="mb-3" style={{ fontWeight: "450" }}>
                  MRP :{" "}
                  <FontAwesomeIcon
                    style={{ fontSize: "18px" }}
                    icon={faRupeeSign}
                  />{" "}
                  {price}
                </h5>
                <h4 className="mb-3" style={{ fontWeight: "450" }}>
                  Brand : {Brand}
                </h4>
                  <Button
                    style={{ display: stock > 0 ? "inline-block" : "none" }}
                    className="me-4"
                    type="submit"
                    onClick = {handlePaymentClick}
                  >
                    Buy Now
                  </Button>
                {stock >= 1 ? <AddToCart product={singleProduct[0]} /> : null}
                <h5
                  style={{
                    marginTop: "15px",
                    fontSize: "16px",
                    color: stock > 0 ? "black" : "red",
                  }}
                >
                  Stock :{" "}
                  <span>
                    {stock > 0
                      ? `Only ${stock} Stocks Availabel`
                      : "Out Of Stock"}
                  </span>
                </h5>
                <h4></h4>
              </div>
              <div className="col-12">
                <h4 className="mb-3 mt-3">Description</h4>
                <div className="table-responsive">
                  <table className="table table-dark border-white table-bordered table-striped table-hover">
                    <tbody>
                      <tr>
                        <td>In The Box</td>
                        <td>{description.In_The_Box}</td>
                      </tr>
                      <tr>
                        <td>Model Number</td>
                        <td>{description.Model_Number}</td>
                      </tr>
                      <tr>
                        <td>Model Name</td>
                        <td>{description.Model_Name}</td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>{description.Color}</td>
                      </tr>
                      <tr>
                        <td>Browse Type</td>
                        <td>{description.Browse_Type}</td>
                      </tr>
                      <tr>
                        <td>SIM_Type</td>
                        <td>{description.SIM_Type}</td>
                      </tr>
                      <tr>
                        <td>Touchscreen</td>
                        <td>{description.Touchscreen}</td>
                      </tr>
                      <tr>
                        <td>OTG_Compatible</td>
                        <td>{description.OTG_Compatible}</td>
                      </tr>
                      <tr>
                        <td>Sound_Enhancements</td>
                        <td>{description.Sound_Enhancements}</td>
                      </tr>
                      <tr>
                        <td>Display_Size</td>
                        <td>{description.Display_Size}</td>
                      </tr>
                      <tr>
                        <td>Resolution</td>
                        <td>{description.Resolution}</td>
                      </tr>
                      <tr>
                        <td>Resolution_Type</td>
                        <td>{description.Resolution_Type}</td>
                      </tr>
                      <tr>
                        <td>Other_Display_Features</td>
                        <td>{description.Other_Display_Features}</td>
                      </tr>
                      <tr>
                        <td>GPU</td>
                        <td>{description.GPU}</td>
                      </tr>
                      <tr>
                        <td>Operating_System</td>
                        <td>{description.Operating_System}</td>
                      </tr>
                      <tr>
                        <td>Processor_Type</td>
                        <td>{description.Processor_Type}</td>
                      </tr>
                      <tr>
                        <td>Processor_Core</td>
                        <td>{description.Processor_Core}</td>
                      </tr>
                      <tr>
                        <td>Primary_Camera_Available</td>
                        <td>{description.Primary_Camera_Available}</td>
                      </tr>
                      <tr>
                        <td>Primary_Camera</td>
                        <td>{description.Primary_Camera}</td>
                      </tr>
                      <tr>
                        <td>Primary_Camera_Features</td>
                        <td>{description.Primary_Camera_Features}</td>
                      </tr>
                      <tr>
                        <td>Secondary_Camera_Available</td>
                        <td>{description.Secondary_Camera_Available}</td>
                      </tr>
                      <tr>
                        <td>Secondary_Camera</td>
                        <td>{description.Secondary_Camera}</td>
                      </tr>
                      <tr>
                        <td>Secondary_Camera_Features</td>
                        <td>{description.Secondary_Camera_Features}</td>
                      </tr>
                      <tr>
                        <td>Flash</td>
                        <td>{description.Flash}</td>
                      </tr>
                      <tr>
                        <td>Full_HD_Recording</td>
                        <td>{description.Full_HD_Recording}</td>
                      </tr>
                      <tr>
                        <td>Frame_Rate</td>
                        <td>{description.Frame_Rate}</td>
                      </tr>
                      <tr>
                        <td>Supported_Networks</td>
                        <td>{description.Supported_Networks}</td>
                      </tr>
                      <tr>
                        <td>Bluetooth_Version</td>
                        <td>{description.Bluetooth_Version}</td>
                      </tr>
                      <tr>
                        <td>WiFi_Version</td>
                        <td>{description.WiFi_Version}</td>
                      </tr>
                      <tr>
                        <td>Sensors</td>
                        <td>{description.Sensors}</td>
                      </tr>
                      <tr>
                        <td>SupportedLanguages</td>
                        <td>{description.SupportedLanguages}</td>
                      </tr>
                      <tr>
                        <td>Important_Apps</td>
                        <td>{description.Important_Apps}</td>
                      </tr>
                      <tr>
                        <td>Audio_Formats</td>
                        <td>{description.Audio_Formats}</td>
                      </tr>
                      <tr>
                        <td>Width</td>
                        <td>{description.Width}</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{description.Height}</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>{description.Weight}</td>
                      </tr>
                      <tr>
                        <td>Warranty_Summary</td>
                        <td>{description.Warranty_Summary}</td>
                      </tr>
                      <tr>
                        <td>Domestic_Warranty</td>
                        <td>{description.Domestic_Warranty}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default SingleProductAccessories;
