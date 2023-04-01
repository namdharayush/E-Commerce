import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Reg = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
          username,
        })
        .then((res) => {
          if (!res) {
            window.alert("InValid Registration");
          } else {
            window.alert("Registration Successfull");
            history("/login"
            );
          }
        })
        .catch((e) => {
          alert("Wrong Details");
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form method="POST">
        <input
          type="text"
          placeholder="Enter Your Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" onClick={submit} />

        <p>Or</p>

        <NavLink to="/login">
          <h4>Log-in</h4>
        </NavLink>
      </form>
    </div>
  );
};

export default Reg;
