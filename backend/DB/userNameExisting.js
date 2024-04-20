import mongoose from "mongoose";
import User from "../Models/userModel.js"



export const userNameExisting_fun = async (userName) => {

    const userNameFound = await User.findOne({ "UserName": userName })
    
    return userNameFound;
    
}


