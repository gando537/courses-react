import React, { FunctionComponent, useState } from "react";

const Navbar: FunctionComponent = () => {
	
	const [nameNav, setNameNav] = useState<String>("Bob's bistro");
	const [menu, setMenu] = useState<String>("Menu");
	const [about, setAbout] = useState<String>("About");
	const [contact, setContact] = useState<String>("Contact");

	return (
		<nav>
			<h1> { nameNav } </h1>
			<ul>
				<li> { menu } </li>
				<li> { about } </li>
				<li> { contact } </li>
			</ul>
		</nav>
	)
}

export default Navbar;


