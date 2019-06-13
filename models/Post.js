const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    stick: [{
        brand: {
            type: String,
            required: true
        },
        material: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        ageGroup: {
            type: String,
            required: true
        },
        hand: {
            type: String,
            required: true
        },
        length: {
            type: Number,
            required: true
        },
        curve: {
            type: Number,
            required: true
        },
        pattern: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        condition: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    }],
    skate: [{
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        ageGroup: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        condition: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    }],
    gloves: [{
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        },
        ageGroup: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        condition: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    }],
    helmet: [{
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        },
        ageGroup: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        condition: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    }]
})

module.exports = Post = mongoose.model("post", PostSchema)