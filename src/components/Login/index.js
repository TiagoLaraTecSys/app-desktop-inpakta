import React from 'react';


function Login() {
  return (
    <div className="inp-login">
      <form className="inp-login__form">
        <label>Usuário</label>
        <input type="text" name="user"></input>
        <label>Senha</label>
        <input type="password" name="password"></input>
        <button type="submit" className="inp-login__btn">Entrar</button>
        <a href="/">ou cadastre-se</a>
      </form>
      </div>
  );
}

export default Login;
