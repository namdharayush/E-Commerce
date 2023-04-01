const express = require("express");
const router = new express.Router();
const bycrpt = require("bcryptjs");
const app = express();

 

require("../db/conn");
const Customer = require("../model/customerSchema");

router.post("/registeruser", async (req, res) => {
  const { username, email, password} = req.body;
  console.log(username);
  console.log(email);
  console.log(password);

  const data = {
    username : username,
    email : email , 
    password : password
  }
  try {
    console.log('hit.....')
    const userExist = await Customer.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ message: "User already exists" });
    } else {
      const user =await Customer.create({username,email,password});
      
      const userRegister = await user.save();
      console.log(userRegister)

      res.status(201).json({ message: "User successfully" });
    }
  } catch (error) {
    res.json({ message: "not Send" });
  }
});

// router.post("/login", async (req, resp) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return resp.status(400).json({ message: "Please Filled The Field" });
//     }
//     const userLogin = await Customer.findOne({ email: email });
//     if (userLogin) {
//       const isMatch = await bycrpt.compare(password, userLogin.password);
//       if (!isMatch) {
//         return resp.status(400).json({ message: "Invalid Credentials" });
//       } else {
//         resp.status(201).send(userLogin);
//       }
//     } else {
//       resp.status(400).json({ message: "Please First Register The account " });
//     }
//   } catch (error) {
//     resp.status(400).json({ message: "Invalid " });
//   }
// });




module.exports = router;
