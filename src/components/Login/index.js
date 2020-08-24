import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {submitUserAction} from '../../services/UserServices/UserLogin'
import { listAllDbProperties } from '../../services/UserServices/ListAllDbProperties';

const UserFormFun = props =>{

  const {handleSubmit} = props
  const submit = (data, submitUserAction) => {submitUserAction(data)}
  return (
    <form action="/componentList" className="inp-login" onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
        <label>Email</label>
        <Field type="text" component="input" name="email"/>
        <label>Senha</label>
        <Field type="password" component="input" name="senha"/>
        <button to="/componentList" className="inp-login__btn" type="submit">Submit</button>
        <Link to="/cadastro" onClick={console.log('olá')}>ou se cadastre</Link>
    </form>

  );
}

const UserForm = (reduxForm({
  form: "formUser"
}))(UserFormFun)

const mapStateToProps = state => ({


})

export default connect(mapStateToProps, {submitUserAction})(UserForm)