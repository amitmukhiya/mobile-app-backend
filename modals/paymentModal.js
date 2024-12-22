const mongoose = require("mongoose");

const paymentScheme = new mongoose.Schema({
    
    relatedstudentId: {
        type: String,
        required: true,
    },
    RentAmount: {
        type: Number,
        required: true,
    },
    otherAmount: {
        type: Number,
        required: false,
        default: 0,
    },
    otherPaymentDetails: {
        type: String,
        required: false,
        default: "",
    },
    paymentDate: {
        type: Date,
        required: true,
    },
    paymentTo: {
        type: String,
        required: true,
    },
    paymentMode: {
        type: String,
        required: true,
    },
    
    
});

module.exports = mongoose.model("PaymentDetails", paymentScheme);