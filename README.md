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
