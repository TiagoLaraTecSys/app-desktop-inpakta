import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Cadastro from './components/Cadastro'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers'
import ReduxThunk from 'redux-thunk'
import CadastroDbProperties from './components/DbProperties';
import ComponentList from './pages/ConfigMapeamento/ComponentList';
import TelaInicial from './pages/ConfigMapeamento';

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
      <Route path="/dbproperties" component={CadastroDbProperties}></Route>
      <Route path="/lista" component={ComponentList}></Route>
      <Route path="/telainicial" component={TelaInicial}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')

);
