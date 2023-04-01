const mongoose= require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        // unique : true,
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }

})

userSchema.pre('save' , async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        console.log(this.password)
    }
    next();
})

const Customer = new mongoose.model("Customer" , userSchema)

module.exports = Customer