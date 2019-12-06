const express = require("express");
const router = express.Router();
const Register = require("../models/staffmodel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("staffdashboard");
});

router.post("/", async (req, res) => {
     res.render("stafflogin");

});

module.exports = router;
