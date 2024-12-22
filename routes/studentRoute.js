const express = require("express");
const router = express.Router();
//Import our model
const studentDb = require("../modals/studentModal");
const db=require("../db");
//Add a student
//POST/api/student - ADD STUDENT

router.post("/", async (req, res) => {
    console.log(req.body);
  try {
    // save student to DB
    const {
      name,
      guardian,
      mobile,
      preparation,
      className,
      coaching,
      state,
      city,
      monthlyRent,
      admissionDate,
      hostelName,
      hostelID,
      id
    } = req.body;
    await studentDb
      .create({
        id: id,
        name: name,
        guardian: guardian,
        mobile: mobile,
        preparation: preparation,
        className: className,
        coaching: coaching,
        state: state,
        city: city,
        monthlyRent: monthlyRent,
        admissionDate: admissionDate,
        hostelName: hostelName,
        hostelID: hostelID
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Student added successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({
          status: "false",
          message: "student could not be added ::" + err,
        });
      });
  } catch (err) {
    console.log(err)
    res.status(500).send({
     
      status: false,
      message: "Server error while adding student::" + err,
    });
  }
});

router.get("/all_students", async (req, res) => {
  try {
    await studentDb
      .find()
      .then((studentList) => {
        console.log(studentList);
        res.status(200).send({
          status: true,
          message: "student list fetched successfully",
          data: studentList,
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "student list could not be fetched::" + err,
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Server error while fetching student list::",
    });
  }
}); 

router.post("/one_student", async (req, res) => {
  console.log(req.body);
  const {id} = req.body;
  console.log('server::'+id);
  try {
    await studentDb
      .find({
        _id: id,
      })
      .then((studentList) => {
        console.log(studentList);
        res.status(200).send({
          status: true,
          message: "student list fetched successfully",
          data: studentList,
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "student list could not be fetched::" + err,
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Server error while fetching student list::",
    });
  }
});

router.get("/hostel_students", async (req, res) => {
  const {hostelID} = req.query;
  console.log('server::'+hostelID);
  try {
    await studentDb
      .find({
        hostelID: hostelID,
      })
      .then((studentList) => {
        console.log(studentList);
        res.status(200).send({
          status: true,
          message: "student list fetched successfully",
          data: studentList,
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "student list could not be fetched::" + err,
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Server error while fetching student list::",
    });
  }
});

module.exports = router;
