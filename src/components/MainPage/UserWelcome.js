import React, { Component } from 'react'

class UserWelcome extends Component {
  
  componentDidMount() {
    console.log(this.props.nome);
  }
 
  render() {
   let nome = this.props.nome
    return (
      <div>
        <h1>Olá, {nome}</h1>
      </div>
    )
  }
}

export default UserWelcome;