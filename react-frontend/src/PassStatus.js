import React from 'react';
import './Form.css';

class PassStatus extends React.Component {



    passStrengthCalc(num){

        switch (this.props.strength){

            case 5:
                return "strongItem";

            case 4:
                return "moderateItemL1";
            case 3:
                if(num<4){

                    return "moderateItemL2";

                }
                break;
            case 2:
                if(num < 3){
                    return "weakItem";}
                break;
            case 1:
                if(num === 1){
                    return "weakItem";}

                break;
            case 0:
                return "inactiveItem";
            default:
                return "inactiveItem";
        }
        return "inactiveItem";

    }

        render(){
        return(


            <div className={this.props.focus===0 ? "passStatusHide" : "passStatusVisible"}>
                <text className={"passText"}/>
                <div className={"passQualityBoxes"} >

                    <div className={this.passStrengthCalc(1)}/>
                    <div className={this.passStrengthCalc(2)} />
                    <div className={this.passStrengthCalc(3)}/>
                    <div className={this.passStrengthCalc(4)}/>
                    <div className={this.props.strength===5 ? "strongItem" : "inactiveItem"}/>

                </div>
            </div>




            );}





}

export default PassStatus;