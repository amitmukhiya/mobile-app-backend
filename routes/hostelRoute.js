const express = require("express");
const router = express.Router();
//Import our model
const hostelModal = require("../modals/hostelModal");

router.post("/add_hostels", async (req, res) => {
    console.log(req.body);
  try {
    const {
      name,
      mobile,
      state,
      city,
      hostelID,
      
    } = req.body;
    await hostelModal
      .create({
        hostelID: hostelID,
        Name: name,
        mobile: mobile,
        state:state,
        city: city,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Hostel added successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({
          status: "false",
          message: "Hostel could not be added ::" + err,
        });
      });
  } catch (err) {
    console.log(err)
    res.status(500).send({
     
      status: false,
      message: "Server error while adding hostel::",
    });
  }
});


router.get("/get_hostels", async (req, res) => {
  try {
    await hostelModal
      .find()
      .then((hostelList) => {
        console.log(hostelList);
        res.status(200).send({
          status: true,
          message: "Hostel list fetched successfully",
          data: hostelList,
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "Hostel list could not be fetched::" + err,
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Server error while fetching hostel list::",
    });
  }
});


module.exports = router;
