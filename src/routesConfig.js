import LoginPage from './components/Login'
import CadastroPage from './components/Cadastro'
import ComponentList from './pages/ConfigMapeamento/ComponentList';

function page404(){
    return(
        <div>
            <h1>404</h1>
            <p>página não encontrada! :(</p>
        </div>
    );
}
const routesConfig = [
    {
        path: "/",
        component: LoginPage,
        exact: true
    },
    {
        path: "/cadastro",
        component: CadastroPage,
        exact: true
    },
    {
        path: "/componentList",
        component: ComponentList,
        exact: true
    },
    {
        component: page404
    }
]
