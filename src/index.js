import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ComponentList from './pages/ConfigMapeamento/ComponentList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cadastro from './components/Cadastro'
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
      <Route path="/cadastro" component={Cadastro}></Route>
      <Route path="/configMapeamento" component={ComponentList}></Route>
      <Route component={Pagina404}></Route>
      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')

);
