import React, { Component } from 'react';
import Cadastro from '../../components/Cadastro'
import Header from '../../components/Header'
import { Link } from 'react-router-dom';

class CadastroUser extends Component { 

  render() {
    return (
      <div className="inp-signup basebg">
        <div className="inp-signup basebgcard">

        <div className="inp-signup__signuptitle">
          <label>
            Crie uma conta para proteger seus dados 
          </label>
        </div>

          {/* <Header/> */}
          <Cadastro />

          <div>
            <Link to="/login" className="inp-signup__back">voltar</Link>          
          </div>

        </div>
      </div>
    ) 
  }
}

export default CadastroUser