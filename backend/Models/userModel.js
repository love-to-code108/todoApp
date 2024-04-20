import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    UserName : String ,
    Password : String,
    Email : String,
    Cookie : String ,
    todo:[
        {
            fileName:String,
        }
    ]
})

export default mongoose.model('user' , UserSchema);