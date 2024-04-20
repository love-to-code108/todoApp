import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// IMPORTING THE MONGOOSE MODELS
import user from "./Models/userModel.js"

// IMPORTING THE DB CONNECTION
import { connectingToDatabase } from './DB/dbConnection.js';

// IMPORTING CHECKING FUNCTIONS
import { userNameExisting_fun } from './DB/userNameExisting.js';
import { userEmailExisting_fun } from './DB/userEmailExisting.js';


// IMPORTING ENCRYPTION AND DECRYPTION
import { decryptObject } from './security/decryption.js';

// IMPORTING DOT ENV
import dotenv from "dotenv";
import { createNewUser } from './DB/createNewUser.js';
import { encryptObject } from './security/encryption.js';
dotenv.config();



const app = express();










// FOR JSON PARSING
app.use(express.json());




// FOR CORS
app.use(cors({ origin: 'http://localhost:5173' }));





app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
})
















// THE SIGN UP ROUTE
app.post("/signup", connectingToDatabase, async (req, res) => {

    // DECRYPTING THE DATA RECEIVED FROM THE FRONTEND
    const decryptedData = decryptObject(req.body.value, process.env.SECRET_KEY);





    // SEARCHING IF THE USERNAME EXISTS OR NOT
    const userNameFound = await userNameExisting_fun(decryptedData.UserName);
    // console.log(userFound);



    // IF THE USER NAME IF FOUND WE SEND THIS MESSAGE
    if (userNameFound) {
        // res.sendStatus(400)
        res.send("User Name already taken");
        return;
    }



    // SEARCHING IF THE EMAIL EXISTS OR NOT
    const userEmailFound = await userEmailExisting_fun(decryptedData.Email);


    // IF THE EMAIL MATCHES
    if (userEmailFound) {
        // res.sendStatus(400)
        res.send("Email already used try with a different email");
        return;
    }


    // CREATING A NEW USER
    const newUserStatus = await createNewUser(decryptedData);

    if (newUserStatus) {
        res.send("New User Created");
        return;
    }
})









// THE SIGN IN ROUTE
app.post('/signin', connectingToDatabase, async (req, res) => {


    // DECRYPTING THE DATA 
    const decryptedData = decryptObject(req.body.value, process.env.SECRET_KEY);


    // console.log(decryptedData);


    // CHECKFOR ANY EXISTING USERNAME
    const userName = await userNameExisting_fun(decryptedData.UserName);

    let userEmail = null;
    let User = null;

    if (!userName) {
        userEmail = await userEmailExisting_fun(decryptedData.UserName);
        User = userEmail;
    }


    User = userName;

    // NO USER NAME / EMAIL
    if (!User) {
        res.send("UserName , Email does not exist");
        return;
    }





    // IF EMAIL / USERNAME MATCHES
    if (decryptedData.Password === User.Password) {



        // ENCRYPTING THE USER OBJECT BEFORE SENDING TO THE FRONTEND
        const encryptedUserObject = encryptObject(User, process.env.SECRET_KEY)


        const UserObject = {
            "value": encryptedUserObject,
        }

        console.log(UserObject);

        // SENDING THE ENCRYPTED USER OBJECT TO THE FRONTEND
        res.send(UserObject);
        return;
    }

    else {
        res.send("Wrong Password");
        return;
    }

})
































// LISTENING ON THIS SPECIFIC PORT
app.listen(4000, () => {
    console.log("Server started on port 4000");
})