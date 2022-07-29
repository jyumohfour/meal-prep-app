import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {

	function handleBudget(e) {
		// sessionStorage only stores strings, can't store numbers (???)
		sessionStorage.setItem('budget', e.target.value);
	}

return (
	<div className = "phrase">
		<text className="first"> First, </text>
		<text className="endPhrase"> let's see what you're working with. </text>
		<text className="body">
			My budget is $<input type="text" placeHolder="(# of $$$)" onChange={handleBudget}/>
		</text>
		<body id = "about">
			<Link to="/Checkbox">
				<div className="button-container">
					<input type="submit" value="Continue" />
				</div>
			</Link>
		</body>


	</div>
	


	
	);
};

export default About;