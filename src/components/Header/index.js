import React from 'react';
import Logo from '../../images/inpakta.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
		<header className="inp-header">
      <div className="inp-header__logo">
        <img src={Logo}></img>
      </div>
			<nav>
        <ul>
          <li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/cadastro">ou se cadastre :*</Link>
					</li>
					<li>
						<Link to="/cadastrodb">CADASTRAR UM BANCO DE DADOS</Link>
					</li>
					<li>
						<Link to="/main">Lista de banco de dados</Link>
          </li>
          	<li>
					  <Link to="/telainicial">Tela Inicial Pós Login</Link>
					</li>
				</ul>
			</nav>
		</header>
  );
}

export default Header;
