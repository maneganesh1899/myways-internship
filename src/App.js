import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import OtpModal from './Components/otp/otp';
import SignUp from './Components/sign/SignUp';
import Thanks from './Components/thanks/thanks';


class App extends Component {
  state = {
    logmodalopen:false,
    signmodalopen:false,
    Otpmodal:false,
    thanksmodal:false
  }

  handleloginmodal =()=>{
    this.setState({
      ...this.state,
      logmodalopen:false
    })
  }
  handlesignmodal=()=>{
    this.setState({
      ...this.state,
      signmodalopen:false
    })
  }
  handleotpmodal=()=>{
    this.setState({
      ...this.state,
      Otpmodal:false
    })
  }

  signbtnclick=()=>{
    this.setState({
      ...this.state,
      signmodalopen:false,
      Otpmodal:true
    })
  }
  handleotpsubbtn=()=>{
    this.setState({
      ...this.state,
      OtpModal:false,
      thanksmodal:true
    })

    
  }

  handlelogbtn=()=>{
    this.setState({
      ...this.state,
      logmodalopen:false,
      Otpmodal:true
    })
  }

  handlenavlogbtn =()=>{
    this.setState({
      ...this.state,
      logmodalopen:true
    })
  }

  handlesignbtn=()=>{
    this.setState({
      ...this.state,
      signmodalopen:true
    })
  }
  
  render() {
    return (<div className="App">
      <Navbar handlelog={this.handlenavlogbtn} handlesigns={this.handlesignbtn}  />
      <Home handlestart={this.handlesignbtn}/>
      <Login show={this.state.logmodalopen} closemodal={this.handleloginmodal} logbtnclick={this.handlelogbtn} />
      <SignUp show={this.state.signmodalopen} closemodal={this.handlesignmodal} handlesign={this.signbtnclick}/>
      <OtpModal show={this.state.Otpmodal} closemodal={this.handleotpmodal}  otpbtn={this.handleotpsubbtn}/>
      <Thanks show={this.state.thanksmodal} />
    </div>);
  } 
}

export default App;
