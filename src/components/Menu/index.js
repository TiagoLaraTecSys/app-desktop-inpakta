import React, { Component } from 'react'

class Menu extends Component{
    constructor(props){
        props.teste = 'oi';
    }
    
    render(){
        return(
            <nav className="Menu">
                <img className="Logo" src={Logo} alt="logoInpakta"/>
            </nav>
        );
    }
}