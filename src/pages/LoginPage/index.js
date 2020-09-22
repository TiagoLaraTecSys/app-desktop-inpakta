import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from '../../components/Login'
import Logo from '../../images/brand_light.png'


class LoginPage extends Component { 

  render() {
    return (
      
      <div className="inp-login container">

        <div className="inp-login">
          <img src={Logo} width="80" height="80" />
        </div>

        <div className="inp-login__welcome">
          <label>
            Bem-vindo
          </label>
        </div>


        <LoginForm />


        <div >
          <p className="inp-login__signup_label">Não possui uma conta?</p>
        </div>

        <div>
          <Link to="/cadastro" className="inp-login__signup">Cadastre-se</Link>          
        </div>
      </div>
    ) 
  }
}

export default LoginPage