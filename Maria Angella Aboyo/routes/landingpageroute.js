const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");



router.get("/", async (req, res) => {
  res.render("stafflandingpage");
  // res.render("input.pug");
});

module.exports = router;
