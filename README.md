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

## Cleanup client directory

> Remove all files in src directory instead of App.css, App.js, index.css, indesx.js <br>
> remove all the codes inside each file. <br>
> Open App.js and type rfce and enter.<br>
> Run the client.

## Adding folders

> components <br>
> pages <br>
> utils

## Add files inside pages folder

> Register.jsx <br>
> Login.jsx <br>
> Chat.jsx

--------------------------------------------------------------------------------<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Light%20Bulb.webp" alt="Light Bulb" width="75" height="75" />----------------------------------------------------------------------

## Register Page

```bash
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Logo from "../assets/logo.svg"


function Register() {
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert("Form Submitted!");
    }

    const handleChange= (event)=>{

    }
  return (
    <>
    <FormContainer>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div className='brand'>
                <img src={Logo} alt='logo'/>
                <h1>Chat-Hub</h1>
            </div>

            <input
                type='text'
                placeholder='Username'
                name='username'
                onChange={(event)=>{handleChange(event)}}/>

            <input
                type='email'
                placeholder='Email'
                name='email'
                onChange={(event)=>{handleChange(event)}}/>

            <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={(event)=>{handleChange(event)}}/>

            <input
                type='password'
                placeholder='Confirm Passworsd'
                name='confirmPassword'
                onChange={(event)=>{handleChange(event)}}/>

            <button type='submit'>Sign Up</button>

            <span>Already have an account? <Link to="/login">Login here</Link></span>
        </form>
    </FormContainer>
    </>
  );
}

const FormContainer = styled.div``;

export default Register
```

> When you paste the above code the form creation is finished <br>
> Now paste this code inside FormContainer to decorate the form.

```bash
const FormContainer = styled.div`
    height: 100vh;
    width: 100wh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background:#131324;
    .brand {
        display:flex;
        align-items:center;
        gap: 1rem;
        justify-content:center;

        img{
            height:5rem;
        }

        h1{
            color: white;
            text-transform: uppercase;
        }
    }
    form{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            background-color: #00000076;
            border-radius: 2rem;
            padding: 3rem 5rem;

            input{
                background-color: transparent;
                padding: 1rem;
                border: 0.1rem solid #191cb6;
                border-radius: 0.4rem;
                color: white;
                width: 100%;
                font-size: 1rem;
                &:focus{
                    border: 0.1rem solid #4b6cbd;
                    outline: none;
                }
            }

            button{
                background-color: #2655bc;
                color: white;
                padding: 1rem 2rem;
                border: none;
                font-weight: bold;
                cursor: pointer;
                border-radius: 0.4rem;
                font-size: 1rem;
                text-transform: uppercase;
                transition: 0.5s ease-in-out;
                &:hover{
                    background-color: #4269bd;
                }
            }

            span{
                color: white;
                text-transform: uppercase;
                a{
                    color: #4269bd;
                    text-decoration: none;
                    font-weight: bold;
                }
            }
        }


`;
```

> Now you are ok with the form creation and decoration part

## From functionality

- Here we are going to create functionalities with,

  > handleChange() <br>
  > handleSubmit() <br>
  > handleValidation() <br>
  > Toast Notification

### 1. handleChange()

> Import useEffect and useState from react

```bash
    import React, {useState, useEffect} from 'react';
```

> Create a state of user as an object.

```bash
  const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    });
```

> Destructure current value to target value in handlechange function

```bash
const handleChange= (event)=>{
        setValues({...values, [event.target.name]:event.target.value});
    }
```

> for checking whether the function is working correctly or not we need <strong>"React chrome extension"</strong>. Search it on google and add to chrome extensions.

![image](https://github.com/Vindyani1999/Chat-App/assets/145743416/7e584ea1-c77b-48aa-8d6d-722dabae9c5c&width=600&height=200)

> If the functionality is correct, then when we typing something on textboxes, the states will be automatically updated.

![WhatsApp Image 2024-05-21 at 12 02 56 PM](https://github.com/Vindyani1999/Chat-App/assets/145743416/b213bfca-afba-4d61-81cd-8429a87ea940&width=800&height=200)

### 2. handleValidation()

> Before implementing that, we need to install a package to get customize toast messages. <br>
> Go to frontend derectory and paste this.

```bash
npm install react-topastify
```

> Import toast from rect-toatify. <br>
> As well as we need to import tostify css library

```bash
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/ReactToastify.css"
```

> Add the ToastContainer end of the from after the FormContainer.

```bash
<ToastContainer/>
```

> For adding validations to the text field we are going to implement handleValidation() function.

```bash
const handleValidation=()=>{
        const {password,confirmPassword,username,email}=values;
        if(password !== confirmPassword)
            {
            toast.error("Password and confirm password should be same.", toastOptions);
            return false;
        }else if(username.length<3){
            toast.error("Username should have minimum 3 characters", toastOptions);
            return  false;
        }else if(password.length<8){
            toast.error("Password should have minimum 8 characters", toastOptions);
            return false;
        }else if(email===""){
            toast.error("Email is required", toastOptions);
            return false;
        }
        return true
    }
```

> If our inputs are not under our rules then we have return false. <br>
> That means we are not calling our APIs <br>
> If we entered things correctly we need to call to APIs inside handleSubmit(). <br>
> For thet we should import axios.

```bash
import axios from "axios";
```

> Then we are going to create the APIs in the handleValidation().

```bash
const handleSubmit = async (event)=>{
        event.preventDefault();
        if(handleValidation()){
            const {password, confirmPassword,username,email}=values;
            const {data} = await axios.post()
        };
    }

```

### APIRoutes.js file

> APIRoutes.js file should be craeted in utils folder.

```bash
const host = "http://localhost:5000";
export const registerRoute = `${host}/api/auth/register`;
```

> Update the handleValidation().

```bash
const handleSubmit = async (event)=>{
        event.preventDefault();
        if(handleValidation()){
            const {password, confirmPassword,username,email}=values;
            const {data} = await axios.post(registerRoute,{
                username,email,password
            })
        };
    }
```

- Now we have to make server side functions.

> We need these three folders (controllers, models, routes) and three files (userControllers, userModel, userRoutes) inside the server folder.

![image](https://github.com/Vindyani1999/Chat-App/assets/145743416/54af5127-42ed-41f5-aa4d-84834d28ab38)

### userControler.js

> update file as belows

```bash
module.exports.register = (req, res, next) => {};

```

### userRoutes.js

```bash
const { register } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register",register);

module.exports=router;
```

### Update index.js

> Import the userRoutes file

```bash
const userRoutes = require("./routes/userRoutes");
```

> make the middleware

```bash
app.use("/api/auth",userRoutes)
```

### Checking Workingness

> update userControllers.js as below

```bash
module.exports.register = (req, res, next) => {
    console.log(req.body);
};
```

> Update handleSubmit()

```bash
const handleSubmit = async (event)=>{
        event.preventDefault();
        if(handleValidation()){

            console.log("I'm in the validation part", registerRoute);

            const {password, confirmPassword,username,email}=values;
            const {data} = await axios.post(registerRoute,{
                username,email,password
            })
        };
    }
```

### UserModel.js file

```bash
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requied: true,
    min: 3,
    max: 20,
    unique: true,
  },

  email: {
    type: String,
    requied: true,
    max: 500,
    unique: true,
  },

  password: {
    type: String,
    requied: true,
    min: 8,
  },

  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },

  avatarImage: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema);

```

> Let use this Shcema innside the contoller

```bash
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });

    if (usernameCheck) {
      return res.json({
        msg: "Username is already used by another one.",
        status: false,
      });
    }

    const emailCheck = await User.findOne({ email });

    if (emailCheck) {
      return res.json({ msg: "Emaiil is already used", status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};

```

### Again come to the Register.jsx

> Update handleSubmit as follows

```bash
const handleSubmit = async (event)=>{
        event.preventDefault();
        if(handleValidation()){
            console.log("I'm in the validation part", registerRoute);
            const {password,username,email}=values;
            const {data} = await axios.post(registerRoute,{
                username,email,password
            });

            if(data.status===false){
                toast.error(data.msg, toastOptions);
            }

            if(data.status===true){
                localStorage.setItem("chat-hub-user",JSON.stringify(data.user));
                navigate("/");
            }
        };
    }
```
