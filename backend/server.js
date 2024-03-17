const express = require('express');
const app = express();
const cors = require('cors');

// FOR JSON PARSING
app.use(express.json());

// FOR CORS
app.use(cors({ origin: 'http://localhost:5173' }));


app.get("/" , (req,res) => {
    res.send("<h1>Hello world</h1>");
} )


app.post("/signup" , async(req,res) => {
    await console.log(req.body);
    res.sendStatus(404);
})



app.listen(4000 , () => {
    console.log("Server started on port 4000");
})