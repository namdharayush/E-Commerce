import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';

const Log = () => {

    const history = useNavigate()
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/login",{
                email,password,username
            })
            .then((res)=>{
                if(res.data === "exist"){
                    history("/" , {state : {id : username}})
                }
                else if(res.data === "notExist"){
                    alert("User is not Logged in")
                }
            })
            .catch((e)=>{
                alert("Wrong Details")
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form method='POST' >
            <input type="text" placeholder='Enter Your Username' onChange={(e)=>{setUsername(e.target.value)}} /> 
                <input type="email" placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}} /> 
                <input type="password" placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}} /> 
                <input type="submit" onClick={submit} /> 

                <p>Or</p>
                <NavLink to="/reg">
                    <h3>Register</h3>
                </NavLink>
            </form>
        </div>
    );
}

export default Log;
