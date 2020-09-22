import React, { Component, useContext} from 'react';
import { Link } from 'react-router-dom';
import {submitUserAction} from '../../services/UserServices/UserLogin'
import {listAllDbProperties} from '../../services/UserServices/DBServices/ListAllDbProperties'
import StoreContext from '../Store/Context'
import { useHistory } from 'react-router-dom'

class Login extends Component {

  constructor() {
    super();
    //listAllDbProperties();
    this.state = {
      data: this.defaultData,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  defaultData = {
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
    //const { setToken } = useContext(StoreContext);
    
    if (data !== '') {
      const token = submitUserAction(data)
      //setToken(token);
      console.log('Amém glória Deus ' + token)
      
    } else {

      alert("deu erraddo fdp")
    }
  }
  
  render() {
    const {
      data: {
        senha,
        email
      },
    } = this.state;

    return (
      <div className="inp-login">
       <form action="/componentList" className="inp-login__form" onSubmit={this.handleSubmit}>
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
          
           <button to="/componentList" className="inp-login__btn" type="submit">Submit</button>
           <Link to="/cadastro">ou se cadastre :*</Link>
           <Link to="/dbproperties">CADASTRAR UM BANCO DE DADOS</Link>
           <Link to="/lista">Lista de banco de dados</Link>
           <Link to="/telainicial">Tela Inicial Pós Login</Link>
      </form>
     </div>
    )
  }
}
export default Login
