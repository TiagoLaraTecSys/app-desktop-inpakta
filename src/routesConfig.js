import LoginPage from './components/Login'
import CadastroPage from './components/Cadastro'

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
        component: page404
    }
]
