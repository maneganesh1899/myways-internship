import React from 'react';
import classes from './Home.module.css'

const Home = (props) => {
    return (<div className={classes.main}>
        <p className={classes.titless}>Apply and hear back every time</p>
        <p className={classes.para}>Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</p>
        <button className={classes.btn} onClick={props.handlestart}>Get Started</button>
    </div>);
}

export default Home;