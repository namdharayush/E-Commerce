const mongoose = require('mongoose');
const DB = "mongodb+srv://ayush:g_!3yefYtPwvYdM@cluster0.vhrekyk.mongodb.net/easyelectronics?retryWrites=true&w=majority";
// console.log(DB)

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to server Successfully")
}).catch((err)=>{
    console.log(err)
});