import React, { Component } from 'react';
import LoginForm from '../../components/Login'
import Header from '../../components/Header'

class LoginPage extends Component { 

  render() {
    return (
     
      <div className="inp-login container">
        <Header/>
        <LoginForm />
      </div>
    ) 
  }
}

export default LoginPage