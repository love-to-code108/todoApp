const express = require('express');
const app = express();

// FOR JSON PARSING
app.use(express.json());


app.get("/" , (req,res) => {
    res.send("<h1>Hello world</h1>");
} )


app.post("/signup" , async(req,res) => {
    await console.log(req.body);
    res.sendStatus(404);
})



app.listen(3000 , () => {
    console.log("Server started on port 3000");
})