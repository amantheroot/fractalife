const path = require("path");
const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const mongoose = require("mongoose");
// const winston = require("./middlewares/winston");
const app = express();

// CONFIG
const config = require("../config");

const PORT = config.server.port;

// // Set Environment
// process.env.NODE_ENV = "production";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
mongoose.connect(`${config.db.host + config.db.collection}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}, (err) => {
  if (err) throw new Error(err);
  console.log("MongoDB Connection established...")
});

// Routes
app.use("/", require("./routes/index"));
app.use("/tasks", require("./routes/tasks"));

// Route Not Found
app.use((req, res, next) => {
  next(createError(404, "Route not found."));
});

// Error Handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening to PORT ${PORT}...`);
});
