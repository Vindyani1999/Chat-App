//Getting express web framework from nodejs
const express = require("express");

//Getting cors to handle backend server requests from frontend origin
const cors = require("cors");

//Getting mongoose to manage relationship between data and the scema
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

//creating app using express framework
const app = express();

//Configering .env file
require("dotenv").config();

//using middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);

//creating mongodb connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB has been connected!");
  })
  .catch((error) => {
    console.log(error.message);
  });

//creating server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on port ${process.env.PORT}`);
});
