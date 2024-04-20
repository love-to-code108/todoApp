import mongoose from "mongoose";
import User from "../Models/userModel.js"


export const userEmailExisting_fun = async(Email) => {
    const userEmailFound = await User.findOne({"Email": Email});

    return userEmailFound;
}