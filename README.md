
# Chat-Hub

## Creating React App

> Crate a folder called public <br>
> You can start creating react app using following code

```bash
cd public/
npx create-react-app chat-hub
```

## Create backend

```bash
npm init
npm i express cors bcrypt socket.io mongoose dotenv nodemone
```
> Create a file index.js <br>
> Update package.json as below

```bash
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```

## Creating Server port and Database Connection

> Add this code for inside index.js

```bash
//Getting express web framework from nodejs
const express = require("express");

//Getting cors to handle backend server requests from frontend origin
const cors = require("cors");

//Getting mongoose to manage relationship between data and the scema
const mongoose = require("mongoose");

//creating app using express framework
const app = express();

//Configering .env file
require("dotenv").config();

//using middleware
app.use(cors());
app.use(express.json());

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

```

