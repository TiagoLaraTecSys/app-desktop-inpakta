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
        this.setState({redirect: "/cadastro"})
      }
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

    if (this.state.redirect !== '') {
      return (<Redirect to={this.state.redirect}/>)
    }
    return (
      <div className="inp-login">

       <form action="/main" className="inp-login__form" onSubmit={this.handleSubmit}>
 
          <input
            type='email'
            name='email'
            placeholder="E-mail"
            onChange={this.handleChange}
            className='bf-input__general'
            value={email}
            required
          />
          
            <input
              type='password'
              name='senha'
              placeholder="Senha"
              onChange={this.handleChange}
              className='bf-input__general'
              value={senha}
              required
            />          

            

      </form>

                
      <button to="/main" className="inp-login__btn" type="submit">LOGIN</button>



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