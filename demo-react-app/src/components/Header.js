import React from "react";
import logo from '../images/logo.svg';

function Header () {
	return (
		<header className="App-header">
			<nav>
        		<img src={logo} className="App-logo" alt="logo" />
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
	 	</header>
	)
}

export default Header
