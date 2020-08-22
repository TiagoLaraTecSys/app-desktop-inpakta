import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ComponentList from './pages/ConfigMapeamento/ComponentList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cadastro from './components/Cadastro'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import ReduxThunk from 'react-thunk'

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
  <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/cadastro" component={Cadastro}></Route>
      <Route path="/configMapeamento" component={ComponentList}></Route>
      <Route component={Pagina404}></Route>
      
    </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')

);
