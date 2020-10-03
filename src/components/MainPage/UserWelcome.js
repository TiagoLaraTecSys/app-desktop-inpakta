import React, { Component } from 'react'
import {getUserInfos} from '../../services/UserServices/GetUserInfos'
class UserWelcome extends Component {
    constructor() {
    super();
    this.state = {
      nome: ''
    }
  }

  setUser(token) {
    let { dados } = ''; 
    let url = 'https://inpaktaservice.herokuapp.com/cliente/infos';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': token
      }
    })
      .then(response => response.json())
      .then(json => {
        dados = json
        console.log(dados);
        this.setState({nome : dados.nome})
        localStorage.setItem('userName', dados.nome)
      })
  
  }
  
  componentDidMount() {
    this.setUser(localStorage.getItem('authToken'))
  }
 
  render() {
  
    return (
      <div>
        <h1>Olá, {this.state.nome}</h1>
      </div>
    )
  }
}

export default UserWelcome;