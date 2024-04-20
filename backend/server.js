import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// IMPORTING THE MONGOOSE MODELS
import user from "./DB/userModel.js"

// IMPORTING THE DB CONNECTION
import { connectingToDatabase } from './DB/dbConnection.js';




const app = express();
// CONNECTION TO DATABASE
// mongoose.connect('mongodb+srv://lovetocode108:chetanyamatman108@todoapp.utheg5k.mongodb.net/todoApplicationDatabase')
//     .then(() => console.log("Database Connected"))
//     .catch((e) => console.log("Error Database not connected", e));


   






// FOR JSON PARSING
app.use(express.json());




// FOR CORS
app.use(cors({ origin: 'http://localhost:5173' }));





app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
})





// THE SIGN UP ROUTE
app.post("/signup",connectingToDatabase,async (req, res) => {
   console.log(req.body);
})




// LISTENING ON THIS SPECIFIC PORT
app.listen(4000, () => {
    console.log("Server started on port 4000");
})