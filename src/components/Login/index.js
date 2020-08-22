import React from 'react';
import { Link } from 'react-router-dom';


function submitUserLogin(){
  let url = 'https://inpaktaservice.herokuapp.com/login';
  let imprim = {email: 'laratecsys@gmail.com', senha: '1234'};

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

function imprimir(){
  console.log('Testando');
}

function Login(){
  
  return (
    <div className="inp-login">
      <div onSubmit="" className="inp-login__form">
        <label>Usuário</label>
        <input type="text" name="user"></input>
        <label>Senha</label>
        <input type="password" name="password"></input>
        <button className="inp-login__btn" onClick={submitUserLogin()}>Entrar</button>
        <Link to="/cadastro">ou cadastre-se</Link>
      </div>
    </div>
  );
}


export default Login;
