import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
return (
	<div className = "background">
		<div className="first">
			First,
        </div>
		<div className="head">
			let's see what you're working with.
		</div>
		<div className="body">
			My budget is <input type="text" placeHolder="(# of $$$)"/> for <input type="text" placeHolder="(# of weeks)"/>.
		</div>
		

		
		<li>
		<Link to="/SecondList">Link</Link>
		</li>
	</div>
	


	
	);
};

export default About;
