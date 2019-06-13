const express = require("express")
const mongoose = require("mongoose")
// const bodyParser = require("body-parser")

// const posts = require("./routes/api/posts.js")

const app = express()

const db = require("./config/keys").mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("mongo db has connected")
    )
    .catch(err => console.log(err));


// app.use("/api/posts", posts)


const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server is running on port: " + PORT)
})