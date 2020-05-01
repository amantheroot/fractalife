const path = require("path");
const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");
const app = express();

const PORT = require("../config").server.port;

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello.");
});

// Route Not Found
app.use((req, res, next) => {
  next(createError(404, "Route does not exist."));
});

// Error Handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening to PORT ${PORT}...`);
});
