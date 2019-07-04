const express = require("express");
const router = express.Router();

let Excercise = require("../models/excercise.model");

// displaying all the data from the code
router.route("/").get(function(req, res) {
  Excercise.find(function(err, excercise) {
    if (err) {
      console.log(err);
    } else {
      res.json(excercise);
    }
  });
});
//Adding
router.route("/:add").post(function(req, res) {
  let excercise = new Excercise(req.body);
  excercise
    .save()
    .then(excercise => {
      res.status(200).json({ excercise: "Excercise succesfully added" });
    })
    .catch(err => {
      res.status(400).send("adding new excercise failed");
    });
});
//Finding
router.route("/:id").get(function(res, req) {
  let id = req.params.id;
  Excercise.findById(id, function(err, excercise) {
    res.json(excercise);
  });
});
//Update

router.route("/:update/:id").post(function(req, res) {
  let id = req.params.id;
  Excercise.findById(id, function(err, excercise) {
    if (!excercise) {
      res.status(400).send("Database not found");
    } else {
      excercise.username = req.body.username;
      excercise.description = req.body.description;
      excercise.duration = Number(req.body.duration);
      excercise.date = Date.parse(req.body.date);

      excercise
        .save()
        .then(excercise => {
          res.json("Excercise Updated");
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
});
module.exports = router;
