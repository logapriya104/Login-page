
import React from "react";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";

import Navi from './Navi';
import Dashpage from './Facebkpage'
import Welcomepage from "./Welcomepage";
import Facebkstore from "./Facebkstore";
import Forgotpassw from "./Forgotpassw";
import Resetpaswd from "./Resetpaswd";

import { Provider } from "react-redux";

function Work(){
   
return(
   <Router>
      <Link to="/"> </Link>
   <Link to="Navi"> </Link>
   <Link to="Welcomepage"> </Link>
   <Link to="Forgotpassw"> </Link>
   <Link to="Resetpaswd"> </Link>

<Routes>
  
   <Route path ="/" element ={<Dashpage />} />
   <Route path="Navi" element ={<Navi />}/>
   <Route path="Welcomepage" element ={<Welcomepage />}/>
   <Route path="Forgotpassw" element={<Forgotpassw />} />
   <Route path="Resetpaswd" element={<Resetpaswd />}/>
   </Routes>
   </Router>
)

}

export default function App(){
return(
<Provider store ={Facebkstore}>
<Work />
</Provider>
);
}


