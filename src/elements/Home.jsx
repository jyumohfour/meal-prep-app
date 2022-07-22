import React, {useEffect} from "react";
import "./styles.css";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import salad from "./images/salad.jpeg";
import penguin from "./images/penguin.jpeg";

const Home = () => {
	
	// resets values for queries in case traversing backward from next page
	sessionStorage.removeItem('usedIngredients');
	sessionStorage.removeItem('intolerances');
	sessionStorage.removeItem('diet');
	sessionStorage.setItem('usedIngredients', JSON.stringify([]));
	sessionStorage.setItem('intolerances',JSON.stringify([]));
	sessionStorage.setItem('diets', JSON.stringify([]));

	useEffect(() => {
		// need to set item value here otherwise cart is one step behind
		sessionStorage.setItem('things', JSON.stringify(JSON.parse(sessionStorage.getItem('things'))));
		console.log("current array")
		console.log(JSON.parse(sessionStorage.getItem('things')));
	}, [sessionStorage.getItem('things')])

return (
		<div img alt = "salad" className = "homeImg" src = {salad} >
			<ul class="navBar">
				<div className="logo">
					<img alt="penguin" className="logoImg" src={penguin}/>
					<text>Meal Prep</text>
				</div>
				<li>
					{/* Endpoint to route to Home element */}
					<Link to="/">Home</Link>
				</li>
				<li>
					{/* Endpoint to route to About element */}
					{/* NOW DOWNLOADS IMAGE OF PENGUIN */}
					<Link to={penguin} target="_blank" download>About</Link>
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