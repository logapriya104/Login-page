
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

function Resetpaswd(){


 const [newPass, setNewPass] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const updatePassword = () => {
    if(newPass.length <6){
        setError("Password must be at least 6 digits");
        return;
    }

    dispatch({
        type:"UPDATE_PASSWORD",
        payload:newPass
    });

    localStorage.setItem("password",newPass);

    alert("password updated successfully")
};


return(<div className="resetpasworddiv">
    
    <div className="seconddiv">
<h1>Reset Password</h1>

<div className="resetinputdiv">

<input className="resetinput"
type="password"
placeholder="Enter Password"
value={newPass}
onChange={(e) => {setNewPass(e.target.value); setError("")}} />
</div>
  <p style={{ color: "red" }}>{error}</p>


<div className="resetbutton">   <button onClick={updatePassword} >Update</button> 
</div>

</div>


<p className="resetp" 
onClick={()=>navigate("/")}>Go to the Login page</p>
</div>
);
}
export default Resetpaswd;