
import { useSelector } from "react-redux";

function Welcomepage(){

    const email = localStorage.getItem("email");
    
    return(<div style={{textAlign:'center'}}>

        <h1 style={{color:'purple'}}> welcome this page {email}</h1>
       
        </div>
    );
}
export default Welcomepage;