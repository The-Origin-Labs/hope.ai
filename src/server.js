// Dependencies
const express = require('express');


// ##############
// Express client 
// ##############
const app = express()


app.get("/", (req, res) => {
    res.send("server running perfectly")
})


app.listen(8000, () => {
    console.log(`server running at http://localhost:8000 🚀`)
})