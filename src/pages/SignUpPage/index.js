import React, { Component } from 'react';
import Cadastro from '../../components/Cadastro'
import Header from '../../components/Header'

class CadastroUser extends Component { 

  render() {
    return (
      <div className="inp-login container">
       
        <Header/>
        <Cadastro />
      
      </div>
    ) 
  }
}

export default CadastroUser