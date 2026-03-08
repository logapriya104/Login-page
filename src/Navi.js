
import React from 'react'
import './App.css'
import { useState } from 'react';
import image from './image.png'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Nav(){

  const navigate = useNavigate();

   const [formmin, setForm]=useState('');
   const[name, setName] = useState('');
   const[frmemail,setFormemail]=useState('');
   const[frmnumber,setFormnumber]=useState('');
   const[frmpassword,setFormpas]=useState('');
   const[frmpasw,setFormpasw] = useState('');
   const[resslt,setReslt]=useState('');

   const[get, setValue]  =useState({
    name: '',
    age: '',
    email: '',
    number:'',
    password:'',
    pswd:'' 
  });

const handleFun = (e) =>{e.preventDefault();

 let isValid =true;

if(get.name==='' &&  get.email===''&& get.number==='' && get.password==='' && get.pswd===''){

setForm('All field are required')
isValid = false;
}
if(isValid){
if(get.name=== "") {
setName("Please provide your name.") 
isValid =false;
}
else
    {if(!get.name.includes("ya")) {
   setName("Name must be 'ya'.");
  isValid =false; 
  } 
}

 if(get.email ==='') {
setFormemail("Please provide your email.")
isValid =false; 
}
 else
   { if(get.email && !get.email.includes('@')) {
   setFormemail("Email must include '@'.")
   isValid =false; 
}}


 if(get.number===''){
    setFormnumber(" Please provide your phone number.")
    isValid =false; 
   }
   else
       {if (get.number.length !==10) {
   setFormnumber("Phone number must be 10 digits") 
   isValid =false;   
   }}


if(get.password ===''){
    setFormpas("Please provide your password.")
    isValid =false; 
    }

 else { if(get.password.length <7){
   setFormpas("Password must be at least 7 characters long.")
   isValid =false; 
 }}

if(get.pswd===''){
    setFormpasw("Please confirm your password.")
    isValid =false; 
    }
    else {if(get.pswd !==get.password){
      setFormpasw("Passwords do not match. ")
      isValid =false; 
    }
  }
};


if(isValid){
  if(get.name==="priya"  && get.email==="priya_@" && get.number==="1234567899" && get.password==="Psw12345" && get.pswd===get.password){
setForm(
    alert("Login successful !!"));
    setReslt("login successful !!")
    }  
else{
    setReslt("Error:Invalid credentials.")
    console.log("Invalid credentials");
  }
}
};

return (
<div className='signdiv' style={{backgroundImage: `url(${image})` ,marginTop:'0px',backgroundSize: 'cover',height:'100%'}} > 
 
 <h1 style={{marginTop:'0px'}}>sing up page </h1 >


<input type='text' placeholder='Name' value={get.name} onChange={(e) => {setValue(prev => ({...prev, name: e.target.value})); setName('') } }
       className='plshold'
      style={{width:'350px', height:'25px'}} />
      <p>{name}</p>
<br />  

 <input placeholder='Date of birth' type='date' value={get.age} onChange={(e) => setValue(prev => ({ ...prev,age: e.target.value})) } 
      style={{width:'350px', height:'25px'}} className='d2' />
      <p></p>
<br />  
  <input type='email'  value={get.email} onChange={(e) => {setValue(prev =>({ ...prev,email: e.target.value})) ; setFormemail('')} }
    placeholder='Email' style={{width:'350px', height:'25px'}} className='d3' />
    <p>{frmemail}</p>
<br />  
  <input type='number'placeholder='phone number' value={get.number} onChange={(e) => {setValue(prev =>({ ...prev,number: e.target.value})); setFormnumber('') }}
    style={{width:'350px', height:'25px'}} className='d4' />
    <p> {frmnumber}</p>
<br />  
   <input type='password' placeholder='password' value={get.password} onChange={(e) => {setValue(prev =>({...prev,  password: e.target.value})); setFormpas('')  }}
     style={{width:'350px', height:'25px'}}  className='d5'/>
    <p>{frmpassword}</p>
<br />   
   <input type='password' placeholder='Confirm password' value={get.pswd} onChange={(e) => {setValue(prev =>({ ...prev, pswd: e.target.value})) ; setFormpasw('')   }}
    style={{width:'350px', height:'25px'}}  className='d6'/>
    <p>{frmpasw}</p>
<br /> 
<h3 onChange={(e) =>setForm(e.target.value)} style={{fontWeight:'bold', color:'red'}}>{formmin}</h3>

<b>{resslt}</b> <br />
   <button onClick={handleFun}
   style={{width:'360px', height:'35px'}}  className='d7'> sign up</button>

   
<p onClick={() => navigate("/")} className='bld'>
     Already have an account? Login</p>
</div>
);
}
export default Nav;

