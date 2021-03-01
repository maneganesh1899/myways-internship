import React from 'react';
import classes from "./SignUp.module.css";
import Modal from 'react-modal'


const SignUp = (props) => {
    return ( 
        <Modal className={classes.main} isOpen={props.show}>
            <button onClick={props.closemodal} className={classes.close}>X</button>
            <p className={classes.headings}>Sign Up</p>
            <p className={classes.secheading}>It's quick and easy</p>
            <div className={classes.finput}>
                <input className={classes.fname} type="text" placeholder="First Name"/>
                <input className={classes.lname} type="text" placeholder="Last Name"/>
            </div>
            <input className={classes.einput} type="text" placeholder="Email"/>
            <input className={classes.pinput} type="text" placeholder="Password"/>
            <button className={classes.sbtn} onClick={props.handlesign}>Sign Up</button>
        </Modal>
     );
}
 
export default SignUp;