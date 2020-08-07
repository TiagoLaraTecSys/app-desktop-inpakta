import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="inp-login">
      <form className="inp-login__form">
        <label>Usuário</label>
        <input type="text" name="user"></input>
        <label>Senha</label>
        <input type="password" name="password"></input>
        <button type="submit" className="inp-login__btn">Entrar</button>
        <Link to="/cadastro">ou cadastre-se</Link>
      </form>
      </div>
  );
}

export default Login;
