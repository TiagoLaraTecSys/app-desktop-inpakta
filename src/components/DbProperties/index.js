import React, { Component } from 'react'
import Header from '../Header'
import {insertDbProperties} from '../../services/UserServices/DBServices/InsertDbProperties'


class DbProperties extends Component {
  constructor() {
    super();
    this.state = {
      data: this.defaultData,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  defaultData = {
    repository: '',
    vendor: '',
    driver: '',
    username: '',
    password: '',
    dbschema: '',
    url: '',
    isActive:'',
    dataDiscoveryProperties_id:'75'
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
      
      insertDbProperties(data)
        
    } else {
      alert("deu erraddo fdp")
    }
  }
  
  render() {
    const {
      data: {
        vendor,
        driver,
        password,
        username,
        dbschema,
        url
      },
    } = this.state;

    return (
      <div className="cadastro">
        <Header ></Header>
        <form action="/componentList" className="cadastro__form" onSubmit={this.handleSubmit}>
          <label>
            Gerenciador
          </label>
          <select
            type='text'
            name='vendor'
            onChange={this.handleChange}
            className='cadastro__form--input'
            value={vendor}
            required
          >
            <option>Selecione</option>
            <option>MySql</option>
            <option>Oracle</option>
          </select>
          <label>
            Driver
          </label>
          <input
            type='text'
            name='driver'
            onChange={this.handleChange}
            className='cadastro__form--input'
            value={driver}
            required
          />
          <label>
            Usuário
          </label>
          <input
            type='text'
            name='username'
            onChange={this.handleChange}
            className='bf-input__general'
            value={username}
            required
          />
          
          <label >
            Senha
          </label>
          <input
            type='text'
            name='password'
            onChange={this.handleChange}
            className='bf-input__general'
            value={password}
            required
          />
          <label >
            Data base
          </label>
          <input
            type='text'
            name='dbschema'
            onChange={this.handleChange}
            className='bf-input__general'
            value={dbschema}
            required
          />

          <label >
            Url
          </label>
          <input
            type='text'
            name='url'
            onChange={this.handleChange}
            className='bf-input__general'
            value={url}
            required
          />

          <label >
            <input
              type="checkbox"
              name='isActive'
              className="check"
              value="1"
              onChange={this.handleChange}
            />
            Ativado
          </label>
          
           <button to="/componentList" className="cadastro__btn" type="submit">Submit</button>
         
      </form>
     </div>
    )
  }
}
export default DbProperties
