const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Customer = require('./model/customerSchema')
require("./db/conn")
const authRouter = require('./router/auth')
dotenv.config({path : "../config.env"})
const shortid = require('shortid')
const Razorpay = require('razorpay')
const app = express();
const bcrypt = require('bcryptjs')
const validator = require('validator')

require("./db/conn");




const corsOptions = {
    origin: "*",
    credentials: true
}


app.use(express.json({ extended: false }));
// app.use(authRouter)
app.use(cors());

const PORT = process.env.PORT || 8000;


const middleware = (req,resp,next) =>{
    console.log("Hello My Friends")
    next()
}


app.get("/" , cors() , (req,res)=>{

})
app.post("/login" , async(req,resp)=>{
    const {email, password} = req.body
    const hash = password
    try {
        const check = await Customer.findOne({email : email, password : password})
        if(check){
            resp.json("exist")
        }
        else{
            resp.json("notExist")
        }
    } catch (error) {
        resp.json("not Exist")
    }
})
app.post("/signup" ,async (req,resp,next)=>{
    const {username , email, password} = req.body
    const data = {
        email : email,
        username : username,
        password : password
    }
    try {
        const userExist = await Customer.findOne({ email: email });
        if (userExist){
          return resp.status(422).json({ message: "User already exists" });
          alert("User already exists")
        } else if(!userExist && validator.isEmail(email)) {
          const user =await Customer.insertMany([data]);
          console.log(user)
          resp.status(201).json({ message: "User successfully" });
        }
        
      } catch (error) {
        resp.status(400).json("Not send");
      }
    

    // bcrypt.genSalt(10,function(err,salt){
    //     bcrypt.hash(password,salt ,async function(err,hash){
            
    //     })
    // })

   
      
})


app.post("/razorpay", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: "rzp_test_86nItSyslS9CDq",
            key_secret: "DiBwpENLqSKKb1LRtH5RhrMU",
        });

        const options = {
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        
        const order = await instance.orders.create(options);
        console.log(order)

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});







app.get('/',(req,resp) =>{
    resp.send("Hello Ayush Namdhar")
})

app.listen(PORT , ()=>{
    console.log(`Listen on ${PORT}`)
})