import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from '../../components/Login'
import Logo from '../../images/brand_light.png'


class LoginPage extends Component { 

  render() {
    return (
      
      <div className="inp-login container">

        <div className="inp-login">
          <img src={Logo} width="80" height="80"></img>
        </div>

        <div className="inp-login__welcome">
          <label>
            Bem-vindo
          </label>
        </div>


        <LoginForm />

        <Link to="/cadastro">ou se cadastre :*</Link>
      </div>
    ) 
  }
}

export default LoginPage