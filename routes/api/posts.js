const express = require("express");
const router = express.Router()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json();


// @route    GET /api/posts/test
// @desc     tests get route
// @access   public
router.get("/testing", (req, res) => {res.send("Hey tom, it's Maddie")
})