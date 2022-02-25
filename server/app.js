const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/JollyHiresMongo");
const conSuccess = mongoose.connection;
conSuccess.once("open", () => {
  console.log("Database connected:");
});

var Schema = mongoose.Schema;

const jollySchema = new Schema({}, { collection: "BusinessLocation" });

const Jolly = mongoose.model("BusinessLocation", jollySchema);

Jolly.find(function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

app.get("/business", (req, res) => {
  console.log("Inside get");

  Jolly.find(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
