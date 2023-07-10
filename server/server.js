const express = require("express");
const dotenv = require('dotenv/config')
const mongoose = require("mongoose");

const URI = process.env.URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log(err);
  });
