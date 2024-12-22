const express = require("express");
const router = express.Router();
//Import our model
const userDB= require("../modals/userModal");
const db=require("../db");


router.post("/create_account", async (req, res) => {
    console.log(req.body);
  try {
    // save user to DB
    const {
      name,
      city,
      phone,
    } = req.body;
    await userDB
      .create({
        id: 1,
        name: name,
        primaryPhone: phone,
        city: city,
        
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "user added successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({
          status: "false",
          message: "user could not be added ::" + err,
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

router.post("/login_account", async (req, res) => {
    const {phone}=req.body;
  try {
    await userDB
      .find({
        primaryPhone: phone,
      })
      .then((userList) => {
        console.log(userList);
        res.status(200).send({
          status: true,
          message: "user list fetched successfully",
          data: userList,
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "user list could not be fetched::" + err,
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Server error while fetching user list::",
    });
  }
});


module.exports = router;
