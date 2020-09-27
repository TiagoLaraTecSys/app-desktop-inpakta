import React, { Component } from 'react';
import DbList from '../../components/DbList'
import HeaderHome from '../../components/HeaderHome'
import UserWelcome from '../../components/MainPage/UserWelcome'
import {getUserInfos} from '../../services/UserServices/GetUserInfos'

class MainPage extends Component { 
  constructor() {
    super();
    this.state = {
      nome: ''
    }

  }
  
  setUser() {
    let token = localStorage.getItem('client-token');
    let nome = localStorage.getItem('userName');
    getUserInfos(token);
    console.log(nome);
    this.setState({ nome: nome})
  }

  componentDidMount() {
    this.setUser();
  }
  componentDidUpdate() {

  }

  render() {
    const nome = this.state.nome;
    return (
      <div className="main-page container">
       
        <div className="main-page__wrapper">
          <HeaderHome />
          <UserWelcome
            nome={nome}
          />
          <DbList />
        </div>
      </div>
    )

  }
}

export default MainPage