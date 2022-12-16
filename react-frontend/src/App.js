import logo from './login.png';
import Registration from "./Registration";
import Register from "./RegisterUser"
import SignIn from "./SignUser"
import Home from "./Home"
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import React from "react";



function App() {
  return (
      <Router>
        <Routes >
          <Route exact path="/" element = {<Register/>}/>
          <Route exact path="/signin" element = {<SignIn/>}/>
            <Route element = {<PrivateRoute/>}>
                <Route exact path="/home" element = {<Home/>}/>
            </Route>
        </Routes>
      </Router>
  );
}

export default App;
