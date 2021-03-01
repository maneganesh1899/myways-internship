import classes from './Navbar.module.css';
import React, { useState } from 'react';

import logo from '../../assest/logo.png'
import inst from '../../assest/inst.png'
import path from '../../assest/paa.svg'

const Navbar = (props) => {
    const [show, handleshow]=useState(false)
    const navclass = ['classes.navlin']
    if(show){
        navclass.push('classes.active')
    }
    return (
        <div>
            <nav className={classes.navbar}>
                <div className={classes.logo}><img src={logo} alt=""/></div>
                <button className={classes.togbtn} onClick={()=>handleshow(!show)}>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                </button>
                <div className={classes.navlin}>
                    <ul>
                        <li className={classes.for}>For You <img src={path} alt=""/></li>
                        <li className={classes.instant}><img src={inst} alt=""/> Instant Apply</li>
                        <li className={classes.pricing}>Pricing</li>
                        <li className={classes.about}>About us</li>
                        <li className={classes.sign} onClick={props.handlesigns}> SIGN UP</li>
                        <li className={classes.login} onClick={props.handlelog}><p className={classes.log} >LOGIN</p></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;