import mongoose from "mongoose";
import User from "../Models/userModel.js"


// CREATING NEW USER HERE

export const createNewUser = async(user) => {


    const newUser = new User({
        "UserName" : user.UserName,
        "Email" : user.Email,
        "Password" : user.Password,
    })

    newUser.save()
    .then(() => {
        console.log("New User Has Been created");
    })
    .catch((e) => console.log("Error from creating new User Section",e))
    
    
    return true;
}