import React, { Component } from 'react';
import { FiChevronDown, FiChevronUp, BsToggleOff, BsToggleOn } from 'react-icons'
import './style.css'


class ComponentList extends Component{

render(){

    return(
        <div> 
        <img src="https://cdn.worldvectorlogo.com/logos/mysql.svg"></img>
        <div className="divSecondary">
            <span>Usuário</span>
            <span>Contato</span>
            <span>URL Conexão</span>
        </div>
        <div>

        </div>
    </div>
    );

}
}

export default ComponentList;