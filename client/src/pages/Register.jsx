import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';


function Register() {

    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const toastOptions ={
        position:"bottom-right",
        autoClose:5000,
        pauseOnHover:true,
        draggable:true,
        theme:'dark',
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(handleValidation()){
            const {password, confirmPassword,username,email}=values;
            const {data} = await axios.post(registerRoute,{
                username,email,password
            })
        };
    }

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

    const handleChange= (event)=>{
        setValues({...values, [event.target.name]:event.target.value});
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
    <ToastContainer/>
    </>
  );
}

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

export default Register