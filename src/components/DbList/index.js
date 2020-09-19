import React, { Component } from 'react';
import { BsToggleOff, BsFillCaretRightFill } from 'react-icons/bs'
import { listAllDbProperties } from '../../services/UserServices/DBServices/ListAllDbProperties'

class ComponentList extends Component{
   constructor() {
    super();
    this.state = {
      data: [],
    }

    this.getList = this.getList.bind(this);
  }


  getList() {
    listAllDbProperties();
  }

  componentDidMount() {
     listAllDbProperties();
  }
render(){

  return (
      <ul className="db-list">
        <li className="db-list__item"> 
          <div className="logo-db">
             <img src="https://cdn.worldvectorlogo.com/logos/mysql.svg"></img>
          </div>
          <div className="db-list__item--infos">
              <span>Usuário: root</span>
              <span>Banco de Dados: inpakt79_database</span>
              <span>URL: http://inpakta.com.br/inpakt79_service</span>
          </div>
          <div className="db-list__item--buttons">
            <BsFillCaretRightFill></BsFillCaretRightFill>
            <span>Offline
              <BsToggleOff></BsToggleOff>
            </span>
          </div>
        </li>
      </ul> 
    );

}
}

export default ComponentList;