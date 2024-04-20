import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    UserName : String ,
    Password : String,
    email : String
})

export default mongoose.model('user' , UserSchema);