import React, { Component } from 'react';
import { submitUserAction } from '../../services/UserServices/UserCadastro'
import { listAllDbProperties } from '../../services/UserServices/DBServices/ListAllDbProperties'
import { Link } from 'react-router-dom';
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-google'


class Cadastro extends Component {
  constructor() {
    super();
    loadReCaptcha();
    listAllDbProperties();
    this.state = {
      data: this.defaultData,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //reCaptcha
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  //reCaptcha
  componentDidMount() {
    if (this.captchaDemo) {
        console.log("started, just a second...")
        this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
      if (this.captchaDemo) {
          this.captchaDemo.reset();
      }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }
  
  //secret key 6LeLp88ZAAAAALjHYRnpZ5a0Qhc5j8kcznCMAQlG
  //end reCaptcha



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
      alert("error"+data)
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
      <div className="inp-signup">

        <form action="/main" className="inp-login__form" onSubmit={this.handleSubmit}>

        <input
          type='text'
          name='name'
          placeholder="Nome completo*"
          onChange={this.handleChange}
          className='bf-input__general'
          value={email}
          required
        />
        
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

        <input
          type='password'
          name='senha'
          placeholder="Confirmar senha*"
          onChange={this.handleChange}
          className='bf-input__general'
          value={senha}
          required
        /> 

        </form>

        <div>

        <ReCaptcha
            ref="recaptcha"
            size="normal"
            render="explicit"
            sitekey="6LeLp88ZAAAAAJFi0Ew4zigZVPZMeoTj-U0YaRqw"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />

        </div>

      <div className="inp-signup__checkbox_items">
        <input type="checkbox" id="user_terms" name="cb_user_terms" value="false" />
        <label className="inp-signup__checkbox_label">Concordo com os </label>  
        <Link to="/login" className="inp-signup__checkbox">termos de uso</Link> 
        <br/>
        <input type="checkbox" id="newsletter" name="cb_newsletter" value="false" />
        <label className="inp-signup__checkbox_label">Desejo receber novidades no e-mail</label>          
      </div>

      <button to="/main" className="inp-signup btn_base" type="submit">Criar sua conta</button>

        {/* <form action="/main" className="inp-signup__form" onSubmit={this.handleSubmit}>
          <label>
            Nome
          </label>
          <input
            type='text'
            name='nome'
            onChange={this.handleChange}
            className='inp-signup__form--input'
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
            className='inp-signup__form--input'
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
          
          <button to="/main" className="inp-signup__btn" type="submit">Submit</button>
          <Link  to="/login">Lista de banco de dados </Link>
         
      </form> */}
     </div>
    )
  }
}
export default Cadastro
