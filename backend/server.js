const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/TodoRoute");

const app = express();
// Fixed to ensure the PORT variable is correctly read from the environment.
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use(cors()); // Enable CORS for all requests

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(routes);

// Global error handling middleware (basic example)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
