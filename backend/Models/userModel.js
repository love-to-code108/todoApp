import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    UserName : String ,
    Password : String,
    Email : String
})

export default mongoose.model('user' , UserSchema);