import React from 'react';
import './Form.css';
import PassStatus from './PassStatus'
import styles from './modules/Titles.module.css'
import Socials from "./Socials";

class InputComponent extends React.Component {

    handleInputChange = (event) => {

        this.props.parentCallback(event);
        event.preventDefault();
    }




    render(){

        return(

            <div className={styles.inputLabelsDiv}>
                <img className={styles.inputIcons} src={this.props.src}/>
                <label>
                    <input
                        placeholder={this.props.placeholder}
                        type = {this.props.type}
                        onChange={this.handleInputChange}
                        name={this.props.name}
                        value={this.props.value}


                    />
                </label>
            </div>

        );
    }


}

export default InputComponent;