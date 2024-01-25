const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    Fullname : {type : String, required : [true, "Fullname is required"]},
    Email : {type : String, required : [true, "Email is required"], unique : true},
    Password : {type : String, required : [true, "Password is required"]},
    PhoneNumber : {type : String, required : [true, "Phone is required"]}
})



const UserModel = mongoose.model("UserModel", UserSchema)
module.exports = UserModel