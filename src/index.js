import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Cadastro from './pages/SignUpPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/LoginPage'
import DbProperties from './pages/SignDataInfoPage';
import MainPage from './pages/MainPage';

function Pagina404(){
  return(
    <div>
      <h1>401</h1>
      Página não encontrada
    </div>
  );
}

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/login" component={Login} exact></Route>
      <Route path="/cadastro" component={Cadastro}></Route>
      <Route path="/cadastrodb" component={DbProperties}></Route>
      <Route path="/main" component={MainPage}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')

);
