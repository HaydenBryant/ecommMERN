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

    const newPost = new Post({
        email: req.body.email,
        date: req.body.date,
        stick: {
            brand: req.body.stick.brand,
            material: req.body.stick.material,
            model: req.body.stick.model,
            ageGroup: req.body.stick.ageGroup,
            hand: req.body.stick.hand,
            length: req.body.stick.length,
            curve: req.body.stick.curve,
            pattern: req.body.stick.pattern,
            color: req.body.stick.color,
            condition: req.body.stick.condition,
            description: req.body.stick.description,
            price: req.body.stick.price
        }
    })

    //save to db
    newPost.save().then(data => res.json(data))

})

module.exports = router