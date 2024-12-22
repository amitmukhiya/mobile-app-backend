const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    guardian: {
        type: String,
        required: true,
    },
    mobile : {
        type: String,
        required: true,
    },
    preparation: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: true,
    },
    coaching: {
        type: String,
        required: true,
    },
    state : {
        type: String,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    monthlyRent : {
        type: Number,
        required: true,
    },
    admissionDate: {
        type: Date,
        required: true,
        //default: Date.now,
    },
    hostelName:{
        type: String,
        required:true
    },
    hostelID:{
        type: String,
        required:true
    },
    paymentDetails: {
        type: Array,
        required: false,
        default: [],
    }
});

module.exports = mongoose.model("Student", studentSchema);