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
// Adding the new user to the database
/*
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExcercise = new Excercise({
    username,
    description,
    duration,
    date
  });

  newExcercise
    .save()
    .then(() => res.json("Excercise added"))
    .catch(err => res.status(400).json("Error" + err));
});


// Finding the user by ID from the database
router.route("/:id").get((req, res) => {
  Excercise.findById(req.params.id).then(excercise =>
    res.json(excercise).catch(err => res.status(400).json("Error" + err))
  );
});

// Finding the user and deleting it from database
router.route("/:id").delete((req, res) => {
  Excercise.findByIdAndDelete(req.params.id).then(excercise =>
    res
      .json("Excercise Deleted")
      .catch(err => res.status(400).json("Error" + err))
  );
});

// Update the datebase code
router.route("/:update/:id").post(function(req, res) {
  Excercise.findById(req.params.id, function(err, todo) {
    if (!todo) {
      res.status(404).send("Data is not found");
    } else {
      excercise.description = req.body.description;
      excercise.responsible = req.body.esponsible;
      excercise.duration = Number(req.body.duration);
      excercise.date = Date.parse(req.body.date);

      excercise
        .save()
        .then(excercise => {
          res.json("Excercise Updated");
        })
        .catch(err => {
          res.status(400).send("update not possible");
        });
    }
  });
});
*/
module.exports = router;
