import React from 'react';
import './Form.css';
import PassStatus from './PassStatus'

import styles from './modules/Titles.module.css'


class Socials extends React.Component{



    render() {

        return(

            <div className={styles.socials}>
                <div className={styles.facebook}>

                    <img className={styles.socialicon} src={require('../src/assets/fbook.jpg')}/>
                </div>
                <div className={styles.facebook}>
                    <img className={styles.socialicon} src={require('../src/assets/google.png')}/>

                </div>
                <div className={styles.facebook}>

                    <img className={styles.socialicon} src={require('../src/assets/lnked.png')}/>

                </div>

            </div>


        );
    }


}

export default Socials;