const express = require("express");
const router = express.Router();
const Register = require("../models/staffmodel");

const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const items = await Register.find();
    console.log(items);
    res.render("staffregistration", { users: items });
  } catch (err) {
    res.status(500).send("unable to save to database");
  }
});

router.post("/", async (req, res) => {
  const register = new Register(req.body);
  try {
    await register.save();
    console.log("Item has been saved");
    const items = await Register.find();
    res.render("stafflogin", { users: items });
  } catch (err) {
    res.status(500).send("unable to save to database");
  }
});

router.get("/search", async (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    let items = await Register.find();
    res.render("staffinput", {
      users: items,
      currentUser: req.session.user
    });
  } else {
    res.redirect("/stafflogin");
  }
});

module.exports = router;
