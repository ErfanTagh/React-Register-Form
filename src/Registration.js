import React from 'react';
import './Form.css';
import PassStatus from './PassStatus'

import styles from './modules/Titles.module.css'
import Socials from "./Socials";
import InputComponent from "./InputComponent";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus:0,
            isGoing:"" ,
            numberOfGuests:"",
            password:"",
            passwordtwo:"",
            passStrengh:0,
            test:0,
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

        if(name === "password" ) {
            this.setState({"focus":1});


            if(value.length===0){

                this.setState({"passStrength":0 });

            } else if(value.length<8){
                this.setState({"passStrength":1});

            }else {
                this.setState({"passStrength":2});
                let i = 0;
                let character = '';
                let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

                let isUpperPresent = false;
                let isLowerPresent = false;
                let isNumPresent = false;
                let isSpecial = false;
                while (i <= value.length) {
                    character = value.charAt(i);


                    if (character >='0' && character<='9') {
                        isNumPresent = true;


                    } else {
                        if (character === character.toUpperCase() && character !== character.toLowerCase()) {
                            isUpperPresent = true;
                        }
                        else if (character === character.toLowerCase() && character !== character.toUpperCase()) {
                            isLowerPresent = true;

                        }
                        else if (format.test(character)) {
                            isSpecial = true;


                        }
                    }
                    i++;
                }
                if(isUpperPresent+isSpecial+isNumPresent+isLowerPresent===2){

                    this.setState({"passStrength":3});


                }
                else if(isUpperPresent+isSpecial+isNumPresent +isLowerPresent ===3){

                    this.setState({"passStrength":4});


                }else if(isUpperPresent + isNumPresent +isSpecial +isLowerPresent ===4){

                    this.setState({"passStrength":5});

                }

            }

        }




    }


handleSubmit(event){
          event.preventDefault();

          if(this.state.isGoing.length===0){

              alert("Name can't be empty");
          }else if(this.state.numberOfGuests===0)
          {
              alert("Email can't be empty");

          }else if(this.state.password.length===0){
              alert("Password can't be empty");

          }
          else if(this.state.passStrength<3){

              alert("Password is weak");
          }
          else if(this.state.password!==this.state.passwordtwo){

              alert("Passwords Do Not Match");



          }else {


              fetch("/users", {
                  method: "POST",
                  headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                      name: this.state.isGoing,
                      email: this.state.numberOfGuests,
                      pass: this.state.password,
                  }),

              }).then((response) => {


                  if (response.status !== 200) {
                      throw new Error(response.statusText);
                  }

                  return response.json();
              })
                  .then(() => {
                      console.log("We'll be in touch soon.");
                      console.log("success");

                  })
                  .catch((err) => {
                      console.log(err.toString());
                      console.log("error");
                  });


          }

    };

    render() {
        return (
            <div>
                <h1 className={styles.maintitle}>Create Account</h1>
                {/*<p>Already have an account? Then <Link to='/signin'>Sign In</Link></p>*/}
                <Socials/>
                <p className={styles.paragrapth}>Or use your email for registration</p>



            <form onSubmit={ this.handleSubmit } className={"form-box"} >

                <InputComponent src={require("./assets/profile.png")}
                                placeholder = {"Name"}
                                name={"isGoing"}
                                type={"text"}
                                value={this.state.isGoing}
                                parentCallback = {this.handleInputChange}
                />

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

                <PassStatus focus={this.state.focus} strength={this.state.passStrength}/>
                <InputComponent src={require("./assets/profile.png")}
                                placeholder = {"Password Again"}
                                name={"passwordtwo"}
                                type={"password"}
                                value={this.state.passwordtwo}
                                parentCallback = {this.handleInputChange}
                />

                <br/>

                <button className={styles.submitBtn} type="submit" >SIGN UP</button>

            </form>

            </div>
        );
    }
}

export default Registration;
