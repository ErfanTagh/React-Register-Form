import logo from "./login.png";
import Registration from "./Registration";
import './App.css';

import { Link } from 'react-router-dom';
import styles from './modules/Titles.module.css'
import React from "react";
import  { useState } from 'react';
import SignUser from "./SignUser";
import {CSSTransition} from "react-transition-group";

function Register() {
    const [count, setCount] = useState(0);
    const [ClassName, setClassName] = useState("");

    function replaceElements(){

        count===0 ? setCount(1) : setCount(0);
    }

    return (
        <div className={".app"}>

                <div  className={count===0 ? styles.signupform : styles.signuprev}>
                    <div className={"inner-content-panel"}>

                        <h1 className={styles.signuphtxt}>{count===0 ? "Welcome Back!": "Hello, Friend!"}</h1>
                        <p className={styles.signuphtxt}>{count===0 ? "To connect with us please login with your personal data"
                                : "Enter your personal details and start the journey with us"}</p>
                        <button className={styles.submitBtnIn} onClick={replaceElements}>{count===0 ? "SIGN IN": "SIGN UP"}</button>
                    </div>
                </div>




                <div className={ ".app-header-left"}>

                    <div className={"app-elements"}>{count===0 ? <Registration/> : <SignUser/>}</div>

                </div>



        </div>
    );
}

export default Register;
