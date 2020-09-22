import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Cadastro from './components/Cadastro'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import CadastroDbProperties from './components/DbProperties';
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
      <Route path="/cadastro" component={Cadastro}></Route>
      <Route path="/dbproperties" component={CadastroDbProperties}></Route>
      <Route path="/lista" component={ComponentList}></Route>
      <Route path="/telainicial" component={TelaInicial}></Route>
    </Switch>
    
  </Router>,
  document.getElementById('root')

);
