
import React , {useState} from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [inputUser , setInputUser] = useState("")
    const [inputPassword , setInputPassword] = useState('')
    const [hide , setHide] = useState(true)
    const [hideText , setHideText] = useState(true)
    const [hideInput , setHideInput] = useState(true)

    const hideButton = () =>{
        if(inputUser != ""){
            setHideInput(false)
        }
        else if(inputUser == ""){
            setHideInput(true)
            setInputPassword('')
            setHideText(true)
        }
        if(inputPassword.length < 8){
            setHide(true)
        }
        else if(inputUser != '' && inputPassword != ''){
            setHide(false)
        }
        if(inputPassword.length < 8){
            setHideText(false)
        }
        else if(inputPassword.length >= 8){
            setHideText(true)
        }
    }

    const submitButton = () =>{
        
    }

  return (
    <>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="login">
            <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="user">
                <label htmlFor="login_username">Username or Email</label>
                <input
                  type="text"
                  value={inputUser}
                  onChange={(e) => setInputUser(e.target.value)}
                  id="login_username"
                  onKeyUp={hideButton}
                  placeholder="Username or Email"
                  required
                />
              </div>
              <div className="user password_input" >
                <label htmlFor="login_password">Password</label>
                <input
                  type="password"
                  disabled={hideInput}
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
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
              <NavLink to="/" style={{textDecoration : "none"}}>
                <button disabled={hide} onClick={submitButton} type="submit">Log In</button>
              </NavLink>
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
