const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    mobile : {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    hostelID: {
        type: String,
        required: true,
        
    },
});

module.exports = mongoose.model("hostelData", hostelSchema);