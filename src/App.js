import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Dashpage from "./Facebkpage";
import Nav from "./Navi";
import Forgotpassw from "./Forgotpassw";
import Resetpaswd from "./Resetpaswd";
import Welcomepage from "./Welcomepage";

function App() {
  return (
    <HashRouter>

      <nav>
        <Link to="/">Login</Link> | 
        <Link to="/Navi">Sign Up</Link> | 
        <Link to="/Forgotpassw">Forgot</Link> | 
        <Link to="/Resetpaswd">Reset</Link> | 
        <Link to="/Welcomepage">Welcome</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashpage />} />
        <Route path="/Navi" element={<Nav />} />
        <Route path="/Forgotpassw" element={<Forgotpassw />} />
        <Route path="/Resetpaswd" element={<Resetpaswd />} />
        <Route path="/Welcomepage" element={<Welcomepage />} />
      </Routes>

    </HashRouter>
  );
}

export default App;