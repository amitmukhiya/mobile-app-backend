const express = require("express");
const router = express.Router();
const studentRoute = require("./studentRoute");
const hostelRoute = require("./hostelRoute");
const paymentRoute = require("./paymentRoute");



router.use("/add_student", studentRoute);
//router.use("/add_hostel", hostelRoute);
router.use("/hostel_list", hostelRoute);
router.use("/payment_details",paymentRoute  );
router.use("/otp_service", require("./twillioRoute"));
router.use("/user_details", require("./userRoute"));
module.exports = router;