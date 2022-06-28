import React from "react";
import "./styles.css";
import "./navbar.css";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import salad from "./images/salad.jpeg";



const Home = () => {
return (
	
		<div img alt = "salad" className = "homeImg" src = {salad} >
			<div className="home">
			<li>
			{/* Endpoint to route to Home element */}
			<Link to="/">Home</Link>
			</li>
			</div>
			<div className="about">
			<li>
			{/* Endpoint to route to About element */}
			<Link to="/about">About</Link>
			</li>
			</div>
			<div className="contactUs">
			<li>
			{/* Endpoint to route to Contact Us element */}
			<Link to="/contactus">Contact Us</Link>
			</li>
			</div>
			
		{/* <img alt="salad" className="homeImg" src={salad} /> */}
		<br />
		<ul>
			
			
			
			
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
		<Link to ="/about">
		<div className="button-container">
          <input type="submit" />
        </div>
		</Link>

	</div>


	);

}

export default Home;
