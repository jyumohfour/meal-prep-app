import React from "react";
import "./styles.css";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import salad from "./images/salad.jpeg";
//import "./styles.css";


const Home = () => {
return (
	
		<div img alt = "salad" className = "homeImg" src = {salad} >
		<h1>Meal Prep</h1>
		{/* <img alt="salad" className="homeImg" src={salad} /> */}
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
			<li>
			<Link to="/about">
     			<button type="button">
          			Click Me!
     			</button>
 			</Link>
			</li>
			<li>
				<Link to="/checkbox">checkbox</Link>
			</li>
		</ul>
		<div className="home-title">
			Meal prep made easy
		</div>
		<div className="home-subtitle">
			20 thousand recipes curated to your diet and budget
		</div>
		<Link to ="/about">
		<div className="button-container">
          <input type="submit" value = "Start saving now"/>
        </div>
		</Link>

	</div>


	);

}

export default Home;
