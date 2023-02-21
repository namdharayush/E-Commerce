import React, { useEffect } from "react";
import { useState } from "react";
import { useProductContext } from "../Context/ProductContext";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faXmark } from "@fortawesome/free-solid-svg-icons";

const CompareProduct = () => {
  const { products } = useProductContext();
  const [firstCompare, setFirstCompare] = useState("");
  const [secondCompare, setSecondCompare] = useState("");
  const [results, setResults] = useState([]);
  const [resultsSecond, setResultsSecond] = useState([]);
  const searchClick = () => {
    setFirstCompare("");
    setResults([]);
  };
  const searchClickSecond = () => {
    setSecondCompare("");
    setResultsSecond([]);
  };

  const keyUp = () => {
    if (firstCompare == "") {
      setResults([]);
    }
    if (secondCompare == "") {
      setResultsSecond([]);
    }
  };

  const handleClick = () => {
    const filterSearchProduct = products.filter((cur) => {
      if (firstCompare == "") {
        return setResults();
      } else if (
        cur.mobilename.toLowerCase().includes(firstCompare.toLowerCase())
      ) {
        return cur;
      }
    });

    setResults(filterSearchProduct);
  };
  const handleClickSecond = () => {
    const filterSearchProduct = products.filter((cur) => {
      if (secondCompare == "") {
        return setResultsSecond();
      } else if (
        cur.mobilename.toLowerCase().includes(secondCompare.toLowerCase())
      ) {
        return cur;
      }
    });

    setResultsSecond(filterSearchProduct);
  };

  return (
    <>
      <div className="bg-dark">
        <div className="container-lg compare_products">
          <div className="row">
            <div className="col-lg-5 col-sm-4">
              <input
                type="text"
                value={firstCompare}
                autoComplete={true}
                list="datalistOptions"
                onChange={(e) => setFirstCompare(e.target.value)}
                placeholder="1st Mobile Name"
                onKeyUp={keyUp}
              />
              <FontAwesomeIcon
                style={{
                  display: firstCompare == "" ? "none" : "inline-block",
                }}
                onClick={searchClick}
                className="faicons"
                icon={faXmark}
              />
              <datalist id="datalistOptions">
                {products.map((res) => {
                  return <option value={res.mobilename} />;
                })}
              </datalist>
            </div>
            <div className="col-lg-1 col-sm-2">
              <Button onClick={handleClick} className="btn" type="button">
                Search
              </Button>
            </div>
            <div className="col-lg-5 col-sm-4">
              <input
                type="text"
                placeholder="2nd Mobile Name"
                value={secondCompare}
                autoComplete={true}
                list="datalistOptions"
                onKeyUp={keyUp}
                onChange={(e) => setSecondCompare(e.target.value)}
              />
              <FontAwesomeIcon
                style={{
                  display: secondCompare == "" ? "none" : "inline-block",
                }}
                onClick={searchClickSecond}
                className="faiconsSecond"
                icon={faXmark}
              />
            </div>
            <div className="col-lg-1 col-sm-2">
              <Button onClick={handleClickSecond} className="btn" type="button">
                Search
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6  col-12">
              {results.map((e) => {
                return (
                  <>
                    <table
                      className="table table-dark border-white table-bordered table-striped table-hover"
                      style={{ color: "white" }}
                    >
                      <tbody>
                        <tr>
                          <td>Product Image</td>
                          <td
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              style={{ width: "50%" }}
                              src={e.image}
                              alt={e.alt}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>{e.Brand}</td>
                        </tr>
                        <tr>
                          <td>Mobile Name</td>
                          <td>{e.mobilename}</td>
                        </tr>
                        <tr>
                          <td>Price</td>
                          <td>
                            <FontAwesomeIcon
                              style={{ fontSize: "18px" }}
                              icon={faRupeeSign}
                            />{" "}
                            {e.price}
                          </td>
                        </tr>
                        {e.specification.map((ee) => {
                          return (
                            <>
                              <tr>
                                <td>ROM</td>
                                <td>{ee.ROM}</td>
                              </tr>
                              <tr>
                                <td>Display</td>
                                <td>{ee.Display}</td>
                              </tr>
                              <tr>
                                <td>Camera</td>
                                <td>{ee.Camera}</td>
                              </tr>
                              <tr>
                                <td>Processor</td>
                                <td>{ee.Processor}</td>
                              </tr>
                            </>
                          );
                        })}
                        {e.description.map((eee) => {
                          return (
                            <>
                              <tr>
                                <td>Color</td>
                                <td>{eee.Color}</td>
                              </tr>
                              <tr>
                                <td>Browse Type</td>
                                <td>{eee.Browse_Type}</td>
                              </tr>
                              <tr>
                                <td>SIM_Type</td>
                                <td>{eee.SIM_Type}</td>
                              </tr>
                              <tr>
                                <td>Touchscreen</td>
                                <td>{eee.Touchscreen}</td>
                              </tr>
                              <tr>
                                <td>OTG_Compatible</td>
                                <td>{eee.OTG_Compatible}</td>
                              </tr>
                              <tr>
                                <td>Sound_Enhancements</td>
                                <td>{eee.Sound_Enhancements}</td>
                              </tr>
                              <tr>
                                <td>Display_Size</td>
                                <td>{eee.Display_Size}</td>
                              </tr>
                              <tr>
                                <td>Resolution</td>
                                <td>{eee.Resolution}</td>
                              </tr>
                              <tr>
                                <td>Resolution_Type</td>
                                <td>{eee.Resolution_Type}</td>
                              </tr>
                              <tr>
                                <td>Other_Display_Features</td>
                                <td>{eee.Other_Display_Features}</td>
                              </tr>
                              <tr>
                                <td>GPU</td>
                                <td>{eee.GPU}</td>
                              </tr>
                              <tr>
                                <td>Operating_System</td>
                                <td>{eee.Operating_System}</td>
                              </tr>
                              <tr>
                                <td>Processor_Type</td>
                                <td>{eee.Processor_Type}</td>
                              </tr>
                              <tr>
                                <td>Processor_Core</td>
                                <td>{eee.Processor_Core}</td>
                              </tr>
                              <tr>
                                <td>Primary_Camera_Available</td>
                                <td>{eee.Primary_Camera_Available}</td>
                              </tr>
                              <tr>
                                <td>Primary_Camera</td>
                                <td>{eee.Primary_Camera}</td>
                              </tr>
                              <tr>
                                <td>Primary_Camera_Features</td>
                                <td>{eee.Primary_Camera_Features}</td>
                              </tr>
                              <tr>
                                <td>Secondary_Camera_Available</td>
                                <td>
                                  {eee.Secondary_Camera_Available}
                                </td>
                              </tr>
                              <tr>
                                <td>Secondary_Camera</td>
                                <td>{eee.Secondary_Camera}</td>
                              </tr>
                              <tr>
                                <td>Secondary_Camera_Features</td>
                                <td>{eee.Secondary_Camera_Features}</td>
                              </tr>
                              <tr>
                                <td>Flash</td>
                                <td>{eee.Flash}</td>
                              </tr>
                              <tr>
                                <td>Full_HD_Recording</td>
                                <td>{eee.Full_HD_Recording}</td>
                              </tr>
                              <tr>
                                <td>Frame_Rate</td>
                                <td>{eee.Frame_Rate}</td>
                              </tr>
                              <tr>
                                <td>Supported_Networks</td>
                                <td>{eee.Supported_Networks}</td>
                              </tr>
                              <tr>
                                <td>Bluetooth_Version</td>
                                <td>{eee.Bluetooth_Version}</td>
                              </tr>
                              <tr>
                                <td>WiFi_Version</td>
                                <td>{eee.WiFi_Version}</td>
                              </tr>
                              <tr>
                                <td>Sensors</td>
                                <td>{eee.Sensors}</td>
                              </tr>
                              <tr>
                                <td>SupportedLanguages</td>
                                <td>{eee.SupportedLanguages}</td>
                              </tr>
                              <tr>
                                <td>Important_Apps</td>
                                <td>{eee.Important_Apps}</td>
                              </tr>
                              <tr>
                                <td>Audio_Formats</td>
                                <td>{eee.Audio_Formats}</td>
                              </tr>
                              <tr>
                                <td>Width</td>
                                <td>{eee.Width}</td>
                              </tr>
                              <tr>
                                <td>Height</td>
                                <td>{eee.Height}</td>
                              </tr>
                              <tr>
                                <td>Weight</td>
                                <td>{eee.Weight}</td>
                              </tr>
                              <tr>
                                <td>Warranty_Summary</td>
                                <td>{eee.Warranty_Summary}</td>
                              </tr>
                              <tr>
                                <td>Domestic_Warranty</td>
                                <td>{eee.Domestic_Warranty}</td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                );
              })}
            </div>
            <div className="col-sm-6  col-12">
              {resultsSecond.map((e) => {
                return (
                  <>
                    <table
                      className="table table-dark border-white table-bordered table-striped table-hover"
                      style={{ color: "white" }}
                    >
                      <tbody>
                        <tr>
                          <td>Product Image</td>
                          <td
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              style={{ width: "50%" }}
                              src={e.image}
                              alt={e.alt}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>{e.Brand}</td>
                        </tr>
                        <tr>
                          <td>Mobile Name</td>
                          <td>{e.mobilename}</td>
                        </tr>
                        <tr>
                          <td>Price</td>
                          <td>
                            <FontAwesomeIcon
                              style={{ fontSize: "18px" }}
                              icon={faRupeeSign}
                            />{" "}
                            {e.price}
                          </td>
                        </tr>
                        {e.specification.map((ee) => {
                          return (
                            <>
                              <tr>
                                <td>ROM</td>
                                <td>{ee.ROM}</td>
                              </tr>
                              <tr>
                                <td>Display</td>
                                <td>{ee.Display}</td>
                              </tr>
                              <tr>
                                <td>Camera</td>
                                <td>{ee.Camera}</td>
                              </tr>
                              <tr>
                                <td>Processor</td>
                                <td>{ee.Processor}</td>
                              </tr>
                            </>
                          );
                        })}
                        {e.description.map((eee) => {
                          return (
                            <>
                              <tr>
                                <td>Color</td>
                                <td>{eee.Color}</td>
                              </tr>
                              <tr>
                                <td>Browse Type</td>
                                <td>{eee.Browse_Type}</td>
                              </tr>
                              <tr>
                                <td>SIM_Type</td>
                                <td>{eee.SIM_Type}</td>
                              </tr>
                              <tr>
                                <td>Touchscreen</td>
                                <td>{eee.Touchscreen}</td>
                              </tr>
                              <tr>
                                <td>OTG_Compatible</td>
                                <td>{eee.OTG_Compatible}</td>
                              </tr>
                              <tr>
                                <td>Sound_Enhancements</td>
                                <td>{eee.Sound_Enhancements}</td>
                              </tr>
                              <tr>
                                <td>Display_Size</td>
                                <td>{eee.Display_Size}</td>
                              </tr>
                              <tr>
                                <td>Resolution</td>
                                <td>{eee.Resolution}</td>
                              </tr>
                              <tr>
                                <td>Resolution_Type</td>
                                <td>{eee.Resolution_Type}</td>
                              </tr>
                              <tr>
                                <td>Other_Display_Features</td>
                                <td>{eee.Other_Display_Features}</td>
                              </tr>
                              <tr>
                                <td>GPU</td>
                                <td>{eee.GPU}</td>
                              </tr>
                              <tr>
                                <td>Operating_System</td>
                                <td>{eee.Operating_System}</td>
                              </tr>
                              <tr>
                                <td>Processor_Type</td>
                                <td>{eee.Processor_Type}</td>
                              </tr>
                              <tr>
                                <td>Processor_Core</td>
                                <td>{eee.Processor_Core}</td>
                              </tr>
                              <tr>
                                <td>Primary_Camera_Available</td>
                                <td>{eee.Primary_Camera_Available}</td>
                              </tr>
                              <tr>
                                <td>Primary_Camera</td>
                                <td>{eee.Primary_Camera}</td>
                              </tr>
                              <tr>
                                <td>Primary_Camera_Features</td>
                                <td>{eee.Primary_Camera_Features}</td>
                              </tr>
                              <tr>
                                <td>Secondary_Camera_Available</td>
                                <td>
                                  {eee.Secondary_Camera_Available}
                                </td>
                              </tr>
                              <tr>
                                <td>Secondary_Camera</td>
                                <td>{eee.Secondary_Camera}</td>
                              </tr>
                              <tr>
                                <td>Secondary_Camera_Features</td>
                                <td>{eee.Secondary_Camera_Features}</td>
                              </tr>
                              <tr>
                                <td>Flash</td>
                                <td>{eee.Flash}</td>
                              </tr>
                              <tr>
                                <td>Full_HD_Recording</td>
                                <td>{eee.Full_HD_Recording}</td>
                              </tr>
                              <tr>
                                <td>Frame_Rate</td>
                                <td>{eee.Frame_Rate}</td>
                              </tr>
                              <tr>
                                <td>Supported_Networks</td>
                                <td>{eee.Supported_Networks}</td>
                              </tr>
                              <tr>
                                <td>Bluetooth_Version</td>
                                <td>{eee.Bluetooth_Version}</td>
                              </tr>
                              <tr>
                                <td>WiFi_Version</td>
                                <td>{eee.WiFi_Version}</td>
                              </tr>
                              <tr>
                                <td>Sensors</td>
                                <td>{eee.Sensors}</td>
                              </tr>
                              <tr>
                                <td>SupportedLanguages</td>
                                <td>{eee.SupportedLanguages}</td>
                              </tr>
                              <tr>
                                <td>Important_Apps</td>
                                <td>{eee.Important_Apps}</td>
                              </tr>
                              <tr>
                                <td>Audio_Formats</td>
                                <td>{eee.Audio_Formats}</td>
                              </tr>
                              <tr>
                                <td>Width</td>
                                <td>{eee.Width}</td>
                              </tr>
                              <tr>
                                <td>Height</td>
                                <td>{eee.Height}</td>
                              </tr>
                              <tr>
                                <td>Weight</td>
                                <td>{eee.Weight}</td>
                              </tr>
                              <tr>
                                <td>Warranty_Summary</td>
                                <td>{eee.Warranty_Summary}</td>
                              </tr>
                              <tr>
                                <td>Domestic_Warranty</td>
                                <td>{eee.Domestic_Warranty}</td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
