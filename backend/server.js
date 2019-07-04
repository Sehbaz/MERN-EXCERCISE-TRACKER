const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");

// Create port
const app = express();
const port = process.env.port || 5000;

//Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established succesfully");
});
const excerciseRouter = require("./routes/excercise");
const usersRouter = require("./routes/users");

app.use("/excercise", excerciseRouter);
app.use("/users", usersRouter);

//starts server
app.listen(port, () => {
  console.log(`Server is up and running on port :${port}`);
});
