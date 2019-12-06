const express = require("express");
const router = express.Router();
const Register = require("../models/staffmodel");

const mongoose = require("mongoose");






router.get("/", (req, res) => {
  res.render("stafflogin");
});




router.post("/", async (req, res) => {
  try {
    const user = await Register.authenticate(
      req.body.staffusername,
      req.body.staffpassword
    );
    req.session.user = user;
    console.log(user)
    res.redirect("/staffregistration/search"); 
  } catch {
    res.send("Login Failed")

  
  }
});


module.exports = router;
