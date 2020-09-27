import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {submitUserAction} from '../../services/UserServices/UserLogin'
import { listAllDbProperties } from '../../services/UserServices/DBServices/ListAllDbProperties'


class Login extends Component {
  constructor() {
    super();
    // listAllDbProperties();
    this.state = {
      redirect: '',
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

    if (data !== '') {

      let authToken = submitUserAction(data);
      
      if (authToken !== '') {
        this.setState({redirect: "/main"})
      }
    } else {
      alert("deu erraddo")
    }
    
  }

  
  render() {
    const {
      data: {
        senha,
        email
      },
    } = this.state;

    if (this.state.redirect !== '') {
      return (<Redirect to={this.state.redirect}/>)
    }
    return (
      <div className="inp-login">

       <form action="/main" className="inp-login__form" onSubmit={this.handleSubmit}>
 
          <input
            type='email'
            name='email'
            placeholder="E-mail*"
            onChange={this.handleChange}
            className='bf-input__general'
            value={email}
            required
          />
          
            <input
              type='password'
              name='senha'
              placeholder="Senha*"
              onChange={this.handleChange}
              className='bf-input__general'
              value={senha}
              required
            />          
        <button to="/main" className="inp-login__btn" type="submit">LOGIN</button>


      </form>

                



     </div>
    )
  }
}
export default Login
