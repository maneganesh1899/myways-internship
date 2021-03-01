import React from 'react';
import Modal from 'react-modal'
import classes from './otp.module.css'


const OtpModal = (props) => {
    return ( 
        <Modal className={classes.main} isOpen={props.show}>
            
          <button onClick={props.closemodal} className={classes.close}>back</button>
          <p className={classes.heading}>OTP sent!</p>
          <input type="text" className={classes.oinput} placeholder="Enter you OTP"/>
          <p className={classes.para}>One time Passcode sent to your email ID- abc@gmail.com</p>
          <button className={classes.ebtn} onClick={props.otpbtn}>Enter</button>

        </Modal>
     );
}
 
export default OtpModal;