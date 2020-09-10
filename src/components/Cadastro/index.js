import React, { Component } from 'react';
import {submitUserAction} from '../../services/UserServices/UserCadastro'

class Cadastro extends Component {
  constructor() {
    //super();
    this.state = {
      data: this.defaultData,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  defaultData = {
    nome: '',
    sobNome: '',
    senha: '',
		email: '',
  };

  handleChange(e) {
    let { name, value } = e.target;
    const { data } = this.state;
    this.setState({data: {...data, [name]: value} });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      data,
    } = this.state;

    if (data !== '') {
      
      submitUserAction(data)
        
    } else {
      alert("deu erraddo fdp")
    }
  }
  
  render() {
    const {
      data: {
        nome,
        sobNome,
        senha,
        email
      },
    } = this.state;

    return (
      <div className="cadastro">
        <form action="/componentList" className="cadastro__form" onSubmit={this.handleSubmit}>
          <label>
            Nome
          </label>
          <input
            type='text'
            name='nome'
            onChange={this.handleChange}
            className='cadastro__form--input'
            value={nome}
            required
          />
          <label>
            Sobrenome
          </label>
          <input
            type='text'
            name='sobNome'
            onChange={this.handleChange}
            className='cadastro__form--input'
            value={sobNome}
            required
          />
          <label>
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder="E-mail*"
            onChange={this.handleChange}
            className='bf-input__general'
            value={email}
            required
          />
          
          <label >
            Senha
          </label>
            <input
              type='password'
              name='senha'
              onChange={this.handleChange}
              className='bf-input__general'
              value={senha}
              required
            />
          
           <button to="/componentList" className="cadastro__btn" type="submit">Submit</button>
         
      </form>
     </div>
    )
  }
}
export default Cadastro
