import React from "react";
import { useState } from "react";
import './App.css'
import image from './facebook.png'
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";



function Dashpage(){
  console.log("logapriya")

  const valuem = useSelector((state) => state.valuem);
  
const paswd = localStorage.getItem("password");

const[name , setValue] = useState('')
const[get, setGet]= useState('')
const[pass, setPassword]=useState('')
const[error,setError]=useState('')
const[user,setUser]=useState('');  



const navigate = useNavigate();

const addCustomer = (e) => {e.preventDefault();

let isValid =true;


if(name === ""){
  setGet('fill the form')
  
     isValid = false;
}

else {
 if(!name.includes('@'))
        {
   setGet('email must include (@)')
   isValid = false;
   }}

if(pass ==='') {
  setError('fill the form')

  isValid = false;}  

else{
 if(pass.length<6)
  {
  setError('password at least six digits')
  isValid = false;
}}

if(isValid){

  if (!paswd) {
    setUser("Password not set. Please reset your password.");
    return;
  }

  if(pass===paswd)
   
  // if(name === valuem  && pass===paswd)
    {
       localStorage.setItem("email", name); 
      alert("login successfull !!")
setUser("");
navigate("/Welcomepage")
  }
  else
    {
   setUser('give the proper email and password')
  }
 }}

return(
 
  <form onSubmit={addCustomer} className="dal">
    
<img src={image} alt="facebook" height='100-px' className="face" /> <br />

<div className="place">
      <input type="text" value={name} onChange={(e) =>{setValue(e.target.value); setGet(''); setUser('')   }}
       placeholder=" email " className="nme"  /> <br />
       <p>{get}</p>
</div>

<div className="pls">
    <input type="password" value={pass} onChange={(e) =>{setPassword(e.target.value); setError(''); setUser('')   }}
    placeholder="password"  className="pass"/> 
   <p>{error}</p>
   
   <p onClick={() =>navigate("/Forgotpassw")} className="Forgotpasw" >Forgot password?</p>
</div>


<button type="submit"   className="but">Log in</button>
<p style={{color:'red'}}>{user}</p>
<p onClick={() =>navigate("/Navi")} className="onclk"> Dont have account? then sign up</p>


</form>

);
}

export default Dashpage;

