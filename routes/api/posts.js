const express = require("express");
const router = express.Router()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json();

//mongoose post schema
const post = require("../../models/Post.js")

//validations
const validatePostInput = require("../../validations/post.js");

// @route    GET /api/posts/test
// @desc     tests get route
// @access   public
router.get("/testing", (req, res) => {res.send("Hello")
})

router.post('/', jsonParser, (req, res) => {

    const newPost = new Post({
        email: req.body.email,
        date: req.body.date,
        stick: {
            brand: req.stick.brand,
            material: req.stick.material,
            model: req.stick.model,
            ageGroup: req.stick.ageGroup,
            hand: req.stick.hand,
            length: req.stick.length,
            curve: req.stick.curve,
            pattern: req.stick.pattern,
            color: req.stick.color,
            condition: req.stick.condition,
            description: req.stick.description,
            price: req.stick.price
        }
    })

    //save to db
    newPost.save().then(data => res.json(data))

})

module.exports = router