const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const { readdirSync } = require("fs");
const connectDB = require("./config/db");

const app = express();

// ConnectDB
connectDB();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

// Route
// http://localhost:8000/api/
// #1
// app.use('/api', require('./routes/api'))

// #2
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// HTTP GET REQUEST
app.get("/", (req, res) => {
  res.status(201).
  json("Home GET Request");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
