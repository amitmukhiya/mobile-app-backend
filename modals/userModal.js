const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
        required: true,
        
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    primaryPhone: {
        type: String,
        required: true,
    },
    alternatePhone: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model("User", userSchema);