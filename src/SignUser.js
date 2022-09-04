import logo from "./login.png";
import Registration from "./Registration";
import './App.css';
import SignInUser from "./SignInUser"
import Socials from "./Socials";
import styles from "./modules/Titles.module.css";
import React from "react";

function SignUser() {
    return (
        <div >

            <header >
                <h1 className={styles.maintitle}>Sign In to Dilemmia</h1>
                <Socials/>
                <p className={styles.paragrapth}>Or use your email Account</p>
                <SignInUser/>
            </header>

        </div>
    );
}

export default SignUser;
