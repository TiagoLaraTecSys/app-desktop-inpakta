import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {submitUserAction} from '../../services/UserServices/UserLogin'
import {listAllDbProperties} from '../../services/UserServices/DBServices/ListAllDbProperties'

class Login extends Component {
  constructor() {
    super();
    listAllDbProperties();
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

    if (data !== '') {
      
      submitUserAction(data)
        
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
      </form>
     </div>
    )
  }
}
export default Login

// const UserFormFun = props =>{

//   const { handleSubmit } = props
  
//   const submit = (data, submitUserAction) => {submitUserAction(data)}
//   return (
//     <div className="inp-login">
//       <form action="/componentList" className="inp-login__form" onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
//           <label>Email</label>
//           <Field type="text" component="input" name="email"/>
//           <label>Senha</label>
//           <Field type="password" component="input" name="senha"/>
//           <button to="/componentList" className="inp-login__btn" type="submit">Submit</button>
//           <Link to="/cadastro" onClick={console.log('olá')}>ou se cadastre</Link>
//       </form>
//     </div>
//   );
// }

// const UserForm = (reduxForm({
//   form: "formUser"
// }))(UserFormFun)

// const mapStateToProps = state => ({


// })

// export default connect(mapStateToProps, {submitUserAction})(UserForm)