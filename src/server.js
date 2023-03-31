// Dependencies
const express = require('express');
const TessaractConvert = require('../modules/tessaract');

// ##############
// Express client 
// ##############
const app = express()


app.get("/", (req, res) => {
    res.send("server running perfectly")
})

app.get("/generate", TessaractConvert)


app.listen(8000, () => {
    console.log(`server running at http://localhost:8000 🚀`)
})