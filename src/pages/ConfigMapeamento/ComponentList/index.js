import React, { Component } from 'react';
import {BsToggleOff, BsFillCaretRightFill} from 'react-icons/bs'
import './style.css'
import Header from '../../../components/Header'




class ComponentList extends Component{

render(){

  return (
     
    <li className="divPrincipal"> 
       <Header />
            <img src="https://cdn.worldvectorlogo.com/logos/mysql.svg"></img>
        <div className="divSecundaria">
            <span>Usuário: root</span>
            <span>Banco de Dados: inpakt79_database</span>
            <span>URL: http://inpakta.com.br/inpakt79_service</span>
        </div>
        <div className="divTerciaria">
            <div className="divTerciaria1">
                <BsFillCaretRightFill></BsFillCaretRightFill>
            </div>
            <div className="divTerciaria2">
                <span>Offline</span>
                <BsToggleOff></BsToggleOff>
            </div>
        </div>
    </li>
    );

}
}

export default ComponentList;