const express = require("express");
const router = express.Router();
const {ACCOUNT_SID, AUTH_TOKEN, SERVICE_SID}=process.env;
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN, {
    lazyLoading: true
});

router.post("/sendOTP", async (req, res) => {
        console.log(req.body);
        const {
            mobile,
            
        } = req.body;
    try {
        const otpResponse= await client.verify.v2.services(SERVICE_SID).verifications.create({
            to: `+91${mobile}`,
            channel: "sms",
            
        })
        res.status(200).send({
            status: true,
            message: "OTP sent successfully",
            data: otpResponse,
        });
        console.log(res);
    } catch (error) {
        console.log(error)
        res.status(400).send({
            status: false,
            message: "OTP could not be sent::" + error,
        });
    }
});

router.post("/verifyOTP", async (req, res) => {
    try {
        const { mobile, otp } = req.body;
        const verifyResponse = await client.verify.v2.services(SERVICE_SID).verificationChecks.create({
            to: `+91${mobile}`,
            code: otp,
        });
        res.status(200).send({
            status: true,
            message: "OTP verified successfully",
            data: verifyResponse,
        });
    } catch (error) {
        res.status(400).send({
            status: false,
            message: "OTP could not be verified::" + error,
        });
    }
});

module.exports = router;