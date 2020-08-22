import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Login extends Component {
  constructor( props ){
		super( props )
		this.state = {
      email: "",
      senha:"",
    }
    this.submitUserLogin = this.submitUserLogin.bind(this),
    this.handleChangeEmail = this.handleChangeEmail.bind(this),
    this.handleChangeSenha = this.handleChangeSenha.bind(this)
  }
  
  submitUserLogin() {
    let email = this.state.email;
    let senha = this.state.senha;
    let url = 'https://inpaktaservice.herokuapp.com/login';
    let imprim = {email, senha};

  fetch(url, {
      method: "POST",
      headers: {
          'Content-type':'application/json'
      },
      body: JSON.stringify(imprim)
  })
  .then(response => response.json())
  .then(json => {console.log(json)})
}
handleChangeEmail(e){
  this.setState({ email: e.target.value })
}

handleChangeSenha(e) {
  this.setState({ email: e.target.value })
  }
  
  
  render() {
    return (
      <div className="inp-login">
        <div onSubmit="" className="inp-login__form">
          <label>Usuário</label>
          <input type="text" name="user" onChange={(e) => handleChangeEmail(e)}></input>
          <label>Senha</label>
          <input type="password" name="password" onChange={(e) => handleChangeSenha(e)}></input>
          <button className="inp-login__btn" onClick={submitUserLogin()}>Entrar</button>
          <Link to="/cadastro">ou cadastre-se</Link>
        </div>
      </div>
    );
  }
}
