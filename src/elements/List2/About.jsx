import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
return (
	<div className = "phrase">
		<text className="first"> First, </text>
		<text className="endPhrase"> let's see what you're working with. </text>
		<text className="body">
			My budget is <input type="text" placeHolder="(# of $$$)"/> for <input type="text" placeHolder="(# of weeks)"/>.
		</text>
		<body id = "about">
			<Link to="/secondlist">
				<div className="button-container">
					<input type="submit" value="Continue" />
				</div>
			</Link>
		</body>


	</div>
	


	
	);
};

export default About;
