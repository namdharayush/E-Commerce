import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReactIsCapsLockActive from "@matsun/reactiscapslockactive";

const Register = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [hide, setHide] = useState(true);
  const [hideText, setHideText] = useState(true);
  const [hideInput, setHideInput] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);

  const hideButton = () => {
    if (inputUser != "") {
      setHideInput(false);
    } else if (inputUser == "") {
      setHideInput(true);
      setInputEmail("");
      setInputPassword("");
      setHideText(true);
    }
    if (inputEmail != "") {
      setHidePassword(false);
    } else if (inputEmail == "") {
      setInputPassword("");
      setHidePassword(true);
    }
    if (inputPassword.length < 8) {
      setHide(true);
    } else if (inputUser != "" && inputPassword != "" && inputEmail != "") {
      setHide(false);
    }
    if (inputPassword.length < 8) {
      setHideText(false);
    } else if (inputPassword.length >= 8) {
      setHideText(true);
    }
  };

  const submitButton = () => {};

  return (
    <>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="login">
            <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="user">
                <label htmlFor="login_username">Username</label>
                <input
                  type="text"
                  value={inputUser}
                  onChange={(e) => setInputUser(e.target.value)}
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
                    justifyContent: "space-between"
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
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  id="login_useremail"
                  disabled={hideInput}
                  onKeyUp={hideButton}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="user password_input">
                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}>
                <label htmlFor="login_password" style={{ display: "inline-block", width: "20%" }}>Password</label>
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
                  disabled={hidePassword}
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
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
                <NavLink to="/log-in" style={{ textDecoration: "none" }}>
                  <button disabled={hide} onClick={submitButton} type="submit">
                    Register
                  </button>
                </NavLink>
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
