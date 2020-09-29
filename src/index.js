import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Cadastro from './components/Cadastro'
<<<<<<< HEAD
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import CadastroDbProperties from './components/DbProperties';
=======
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers'
import ReduxThunk from 'redux-thunk'
import Login from './components/Login'
import DbProperties from './components/DbProperties';
>>>>>>> d9a0c5dd349ebad83724a9c819e0bfec3ad71896
import ComponentList from './pages/ConfigMapeamento/ComponentList';
import TelaInicial from './pages/ConfigMapeamento';
import StoreProvider from './components/Store/Provider'

function Pagina404(){
  return(
    <div>
      <h1>401</h1>
      Página não encontrada
    </div>
  );
}

ReactDOM.render(

  <Router>
   
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/login" component={Login} exact></Route>
      <Route path="/cadastro" component={Cadastro}></Route>
      <Route path="/cadastrodb" component={DbProperties}></Route>
      <Route path="/lista" component={ComponentList}></Route>
      <Route path="/telainicial" component={TelaInicial}></Route>
    </Switch>
    
  </Router>,
  document.getElementById('root')

);
