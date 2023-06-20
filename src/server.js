// Dependencies
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const { TessaractConvert, TessaractClient } = require('../modules/tessaract');

// ##############
// Express client 
// ##############
const app = express()
const PORT = process.env.PORT || 8004

// middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        "message":"server running perfectly"
    })
})

// Sample OCR testing Route
app.get("/v1/test/generate", TessaractConvert)

// Generate OCR text
app.post("/v1/ocr", TessaractClient)


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT} 🚀`)
})