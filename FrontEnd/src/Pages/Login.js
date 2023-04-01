
import axios from "axios";
import React , {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {


    const [email , setEmail] = useState("")
    const [password , setPassword] = useState('')
    const [hide , setHide] = useState(true)
    const [hideText , setHideText] = useState(true)
    const [hideInput , setHideInput] = useState(true)
    const history = useNavigate()

    const hideButton = () =>{
        if(email != ""){
            setHideInput(false)
        }
        else if(email == ""){
            setHideInput(true)
            setPassword('')
            setHideText(true)
        }
        if(password.length < 8){
            setHide(true)
        }
        else if(email != '' && password != ''){
            setHide(false)
        }
        if(password.length < 8){
            setHideText(false)
        }
        else if(password.length >= 8){
            setHideText(true)
        }
    }

    const submitButton =async () =>{
        try {
          await axios.post("http://localhost:8000/login",{
            email , password
          }).then((res)=>{
            if(res.data === "exist"){
              history("/")
          }
          else if(res.data === "notExist"){
              alert("Invalid Email or Password")
          }
          })
        //   .catch((e)=>{
        //     alert("Wrong Details")
        // })
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <>
      <section className="pt-5 pb-5">
        <div className="container-md">
          <div className="login">
            <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="user">
                <label htmlFor="login_username">Email</label>
                <input
                  type="text"
                  name="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="login_username"
                  onKeyUp={hideButton}
                  placeholder="Enter Your  Email"
                  required
                />
              </div>
              <div className="user password_input" >
                <label htmlFor="login_password">Password</label>
                <input
                  type="password"
                  name="password"
                  disabled={hideInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="login_password"
                  onKeyUp={hideButton}
                  placeholder="Password"
                  required='true'
                />
                <span style={{display : hideText ? "none" : "block"}}><h5 id="capsText">Password must be 8 letter*</h5></span>
              </div>
              <div>
                <h6 className="fp">Forget Password?</h6>
              </div>
              <div className="submit-btn">
                <button disabled={hide} onClick={submitButton} type="submit">Log In</button>
              <NavLink to="/register"><h6 className="h6">Register</h6></NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
