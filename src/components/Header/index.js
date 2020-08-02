import React from 'react';
import Logo from '../../images/inpakta.png'


function Header() {
  return (
		<header className="inp-header">
      <div className="inp-header__logo">
        <img src={Logo}></img>
      </div>
			<nav>
				<ul>
					<li>
						<a href="/">Menu1</a>
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
