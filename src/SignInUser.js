import React from 'react';
import './Form.css';

import { Navigate } from "react-router-dom";
import styles from "./modules/Titles.module.css";
import InputComponent from "./InputComponent";


class SignInUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            numberOfGuests:"",
            password:"",
            redirect:false,

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

      handleSubmit(event){
          event.preventDefault();






          fetch("/auchuser", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.state.numberOfGuests,
                    pass: this.state.password,
                }),

            }).then((response)=> {


                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }


                return response.json();

            })
                .then((data) => {



                    if(data['status'] === 1){

                        localStorage.setItem('key', "authenticated" );
                       this.setState({
                           ["redirect"]: true
                       });





                    }else if(data['status'] === 2 ){

                        console.log("Wrong Password");

                    }else if(data['status'] === 0){

                        console.log("User Not Found");
                    }

                })
                .catch((err) => {
                    console.log(err.toString());
                    console.log("error");
                });





    };


    render() {

        const { redirect } = this.state;


        if (redirect) {
            return <Navigate to='/home'/>;
        }


        return (
            <div>

            <form onSubmit={ this.handleSubmit } className={"form-box"} >

                <br />

                <InputComponent src={require("./assets/profile.png")}
                                placeholder = {"Email"}
                                name={"numberOfGuests"}
                                type={"email"}
                                value={this.state.numberOfGuests}
                                parentCallback = {this.handleInputChange}
                />

                <br />

                <InputComponent src={require("./assets/profile.png")}
                                placeholder = {"Password"}
                                name={"password"}
                                type={"password"}
                                value={this.state.password}
                                parentCallback = {this.handleInputChange}
                />

                <br />

                <button className={styles.submitBtn} type="submit">SIGN IN</button>

            </form>

            </div>
        );
    }
}

export default SignInUser;
