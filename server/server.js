const express = require("express");
const dotenv = require("dotenv/config");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

const URI = process.env.URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log(err);
  });


  app.use('*', (err, res) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

  app.listen(7120, () => {
  console.log(`Server is running on port 7120.`);
});