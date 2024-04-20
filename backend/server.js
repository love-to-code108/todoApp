import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// IMPORTING THE MONGOOSE MODELS
import user from "./Models/userModel.js"

// IMPORTING THE DB CONNECTION
import { connectingToDatabase } from './DB/dbConnection.js';

// IMPORTING CHECKING FUNCTIONS
import { userExistsOrNot_function } from './DB/userNameExistsInDBorNot.js';




const app = express();










// FOR JSON PARSING
app.use(express.json());




// FOR CORS
app.use(cors({ origin: 'http://localhost:5173' }));





app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
})





// THE SIGN UP ROUTE
app.post("/signup", connectingToDatabase,async(req, res) => {
    
    const userName = req.body.UserName;
    
    const result = await userExistsOrNot_function(userName);
    console.log(result)


    res.sendStatus(200);
})




// LISTENING ON THIS SPECIFIC PORT
app.listen(4000, () => {
    console.log("Server started on port 4000");
})