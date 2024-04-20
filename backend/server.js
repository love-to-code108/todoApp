const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./DB/userModel')

// CONNECTION TO DATABASE
mongoose.connect('mongodb+srv://lovetocode108:chetanyamatman108@todoapp.utheg5k.mongodb.net/todoApplicationDatabase',)
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log("Error Database not connected", e));


   






// FOR JSON PARSING
app.use(express.json());

// FOR CORS
app.use(cors({ origin: 'http://localhost:5173' }));


app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
})


app.post("/signup", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})



app.listen(4000, () => {
    console.log("Server started on port 4000");
})