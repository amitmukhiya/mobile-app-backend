const express = require("express");
const router = express.Router();
//Import our model
const paymentDb = require("../modals/paymentModal");
const db=require("../db");


router.post("/add_payment_details", async (req, res) => {
    console.log(req.body);
  try {
    // save payment details to DB
    const {
      studentID,
      monthlyRent,
      otherAmount,
      paymentDate,
      paymentTo,
      paymentVia,
      otherPaymentDetails
    } = req.body;
    await paymentDb
      .create({
        relatedstudentId: studentID,
        RentAmount: monthlyRent,
        otherAmount: otherAmount,
        paymentDate: paymentDate,
        paymentTo: paymentTo,
        paymentMode: paymentVia,
        otherPaymentDetails: otherPaymentDetails
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "payment added successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({
          status: "false",
          message: "payment could not be added ::" + err,
        });
      });
  } catch (err) {
    console.log(err)
    res.status(500).send({
     
      status: false,
      message: "Server error while adding payment::" + err,
    });
  }
});
router.get("/get_payment_details", async (req, res) => {
  const studentId=req.query.studentID;
  console.log(req.query);
  console.log('stdID::'+studentId);
  try {
    await paymentDb
      .find({
        relatedstudentId: studentId,
      }).sort({paymentDate: -1})
      .then((paymentList) => {
        console.log(paymentList);
        res.status(200).send({
          status: true,
          message: "payment list fetched successfully",
          data: paymentList,
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "payment list could not be fetched::" + err,
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Server error while fetching payment list::",
    });
  }
});
module.exports = router;
