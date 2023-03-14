import React, { FunctionComponent } from "react";
import image from './react-logo.png'

const ReactWebSite: FunctionComponent = () => {

	return (
		<div>
			<img src="./react-logo.png" width="40px" />
			<h1>Fun facts about React</h1>
			<ol>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walker</li>
				<li>Has well over 100k stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of entreprise apps, including mobil apps</li>
			</ol>
		</div>
	)
}

export default ReactWebSite;

