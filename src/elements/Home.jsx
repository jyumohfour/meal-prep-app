import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
		<h1>Home Page</h1>
		<br />
		<ul>
			<li>
			{/* Endpoint to route to Home element */}
			<Link to="/">Home</Link>
			</li>
			<li>
			{/* Endpoint to route to About element */}
			<Link to="/about">About</Link>
			</li>
			<li>
			{/* Endpoint to route to Contact Us element */}
			<Link to="/contactus">Contact Us</Link>
			</li>
			<li>
			{/*Endpoint to route to List element */}
			<Link to="/list">List</Link>
			</li>
		</ul>
	</div>
	);
};

export default Home;
