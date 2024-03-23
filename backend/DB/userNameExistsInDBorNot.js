import mongoose from "mongoose";
import User from "../Models/userModel.js"

export const userExistsOrNot_function = async (userNameOrEmail) => {

    const userExistsOrNot_variable = await User.findOne({
        UserName : userNameOrEmail,
    });

    console.log(userExistsOrNot_variable);
    return userExistsOrNot_variable;
}