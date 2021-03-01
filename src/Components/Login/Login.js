import React from 'react';
import classes from './Login.module.css'
import Modal from 'react-modal'

Modal.setAppElement('#root  ')
const Login = (props) => {
    return (
        <div>
            <Modal className={classes.main} isOpen={props.show} >
                <div className={classes.mainhead}>
                      <p className={classes.mainhead}>Login</p>
                    <button className={classes.closebtn} onClick={props.closemodal}> <strong>X</strong></button>
                </div>
                <div className={classes.box}>
                    <div className={classes.headings}>
                    <h1 className={classes.head}> <strong>Student</strong></h1>
                    <div className={classes.border}></div>
                    </div>
                    <input className={classes.mail} type="text" placeholder="Email"/>
                    <input className={classes.pass} type="text" placeholder="Password"/>
                    <p className={classes.forget}>Forgot Password?</p>
                    <button className={classes.loginbtn} onClick={props.logbtnclick}>Login</button>
                    <p className={classes.lastp}>New to MyWays? Sign Up here</p>
                </div>

            </Modal>
        </div>

    );
}

export default Login;