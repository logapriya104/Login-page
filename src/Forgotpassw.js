import React from "react";
import './App.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Forgotpassw () {

    const [paswd, setPaswd]=useState('');
    const navigate =useNavigate ();

const setFunction =(e)=> {e.preventDefault();

    if(paswd.trim() !==""){
navigate("/Resetpaswd")
    }
}



return(
<div className="Forgotpage-div ">
<button onClick={() => navigate("/")} className="Forgotpas-button"> ⬅️</button>
<div className="forgotdiv">
    <h1 className="forgth1">Forgot password?</h1>

<div className="forgotinput">
    <input className="finput"
    placeholder="Email " value={paswd} onChange={(e) =>setPaswd(e.target.value)}  /> <br />
    </div>

<div className="forgotbut"> 
    <button className="fbutton"
     onClick={setFunction}>send</button></div>

    <br/>
</div>

</div>);
}
export default Forgotpassw;