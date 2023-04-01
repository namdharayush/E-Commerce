import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ReactIsCapsLockActive from "@matsun/reactiscapslockactive";
import axios from "axios"
import {ToastContainer , toast} from 'react-toastify'
import Cookies from "js-cookie";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hide, setHide] = useState(true);
  const [hideText, setHideText] = useState(true);
  const [hideInput, setHideInput] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);

  let name, value;

  // const handleInput1 = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   setUser({ ...user, [name]: value });
  // };

  const hideButton = () => {
    if (username != "") {
      setHideInput(false);
    } else if (username == "") {
      setHideInput(true);
      setemail("");
      setpassword("");
      setHideText(true);
    }
    if (email != "") {
      setHidePassword(false);
    } else if (email == "") {
      setpassword("");
      setHidePassword(true);
    }
    if (password.length < 8) {
      setHide(true);
    } else if (name != "" && password != "" && email != "") {
      setHide(false);
    }
    if (password.length < 8) {
      setHideText(false);
    } else if (password.length >= 8) {
      setHideText(true);
    }
  };

  const submitButton = async () => {
    try {
      await axios.post("http://localhost:8000/signup" , {
         username,
         email,
         password
      }).then((res)=>{
        if(!res){
          window.alert("Invalid Registration")
        }
        else{
          window.alert("Registration successfully")
          history("/log-in")
        }
      })
    } catch (error) {
      alert("This Email is Already Exist!")
    }
  }


  return (
    <>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="login">
            <form method="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="user">
                <label htmlFor="login_username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e)=>{setUsername(e.target.value)}}
                  id="login_username"
                  onKeyUp={hideButton}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="user email_input">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    style={{ display: "inline-block", width: "20%" }}
                    htmlFor="login_useremail"
                  >
                    Email
                  </label>
                  <ReactIsCapsLockActive>
                    {(active) => (
                      <button
                        style={{ display: active ? "block" : "none" }}
                        className="capslock"
                      >
                        Caps Lock is {active ? "active" : ""}
                      </button>
                    )}
                  </ReactIsCapsLockActive>
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e)=>{setemail(e.target.value)}}
                  id="login_useremail"
                  disabled={hideInput}
                  onKeyUp={hideButton}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="user password_input">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <label
                    htmlFor="login_password"
                    style={{ display: "inline-block", width: "20%" }}
                  >
                    Password
                  </label>
                  <ReactIsCapsLockActive>
                    {(active) => (
                      <button
                        style={{ display: active ? "block" : "none" }}
                        className="capslock"
                      >
                        Caps Lock is {active ? "active" : ""}
                      </button>
                    )}
                  </ReactIsCapsLockActive>
                </div>
                <input
                  type="password"
                  name="password"
                  disabled={hidePassword}
                  value={password}
                  onChange={(e)=>{setpassword(e.target.value)}}
                  id="login_password"
                  onKeyUp={hideButton}
                  placeholder="Password"
                  required
                />
                <span style={{ display: hideText ? "none" : "block" }}>
                  <h5 id="capsText">Password must be 8 letter*</h5>
                </span>
              </div>
              <div>
                <h6 className="fp">Forget Password?</h6>
              </div>
              <div className="submit-btn">
                {/* <NavLink to="/log-in" style={{ textDecoration: "none" }}> */}
                <button style={{cursor:"pointer"}}
                  disabled={hide}
                  name="register"
                  onClick={submitButton}
                  type="submit"
                >
                  Register
                </button>
                {/* </NavLink> */}
                <NavLink to="/log-in">
                  <h6 className="h6">Log In</h6>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
