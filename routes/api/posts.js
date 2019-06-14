const express = require("express");
const router = express.Router()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json();

//mongoose post schema
const post = require("../../models/Post.js")

//validations


// @route    GET /api/posts/test
// @desc     tests get route
// @access   public
router.get("/testing", (req, res) => {res.send("Hey tom, it's Maddie")
})

router.post('/', jsonParser, (req, res) => {
    const newPost = {
        
    }

})