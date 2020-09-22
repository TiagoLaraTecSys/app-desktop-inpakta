import React from 'react';
import Logo from '../../assets/icones/1x/Prancheta 1mdpi.png'


function Header() {
  return (
		<header className="inp-header">
      <div className="inp-header__logo">
        <img src={Logo}></img>
      </div>
			<nav>
				<ul>
					<li>
						<a href="/">Bundinha</a>
					</li>
					<li>
						<a href="/">Menu2</a>
					</li>
					<li>
						<a href="/">Menu3</a>
					</li>
				</ul>
			</nav>
		</header>
  );
}

export default Header;
