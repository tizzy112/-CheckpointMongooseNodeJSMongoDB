const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB using the URI from the .env file
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas")) // Log success message
  .catch((err) => console.error("Failed to connect to MongoDB Atlas", err)); // Log error message if connection fails
