import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./checkbox.css";

const produceList = [
	{ value: "peppers", label: "Peppers" },
	{ value: "onions", label: "Onions" },
	{ value: "potatoes", label: "Potatoes" },
	{ value: "cabbage", label: "Cabbage" },
	{ value: "mushrooms", label: "Mushrooms" },
	{ value: "brocoli", label: "Brocoli" },
	{ value: "eggplant", label: "Eggplant" }
];

const seafoodList = [
	{ value: "lobster", label: "Lobster" },
	{ value: "oyster", label: "Oyster" },
	{ value: "mussell", label: "Mussell" },
	{ value: "shrimp", label: "Shrimp" }
	// { value: "treenuts", label: "Treenuts" },
	// { value: "fish", label: "Fish" },
	// { value: "shellfish", label: "Shellfish" }
];

const refrigeratorList = [
	{ value: "butter", label: "Butter" },
	{ value: "cheese", label: "Cheese" },
	{ value: "eggs", label: "Eggs" },
	// { value: "shrimp", label: "Shrimp" }
	// { value: "treenuts", label: "Treenuts" },
	// { value: "fish", label: "Fish" },
	// { value: "shellfish", label: "Shellfish" }
];

function ContactUs() {

	const [produce, setProduce] = useState([]);
	const [seafood, setSeafood] = useState([]);
	const [refrigerator, setRefrigerator] = useState([]);

	const handleProduce = e => {
		const { value, checked } = e.target;
		if (checked) {
			// push selected value in list
			setProduce(prev => [...prev, value]);
		} else {
			// remove unchecked value from the list
			setProduce(prev => prev.filter(x => x !== value));
		}
	}

	const handleSeafood = e => {
		const { value, checked } = e.target;
		if (checked) {
			// push selected value in list
			setSeafood(prev => [...prev, value]);
		} else {
			// remove unchecked value from the list
			setSeafood(prev => prev.filter(x => x !== value));
		}
	}

	const handleRefrigerator = e => {
		const { value, checked } = e.target;
		if (checked) {
			// push selected value in list
			setRefrigerator(prev => [...prev, value]);
		} else {
			// remove unchecked value from the list
			setRefrigerator(prev => prev.filter(x => x !== value));
		}
	}

	return (
		<div className="page">
			<section className="phrase">
				<text className="third"> Fourth, </text>
				<text className="endPhrase"> pick a few ingredients you like.</text>
			</section>

			<section className="check">
				<section className="checkboxList">
					<div className='title'>Produce</div>
					{produceList.map((x, i) => <label key={i}>
						<label class="container">
							<input
								type="checkbox"
								name="lang"
								value={x.value}
								onChange={handleProduce}
							/> {x.label}
							<span class="checkmark"></span>
						</label>
					</label>)}
					
					{/* <div>Selected allergies: {allergies.length ? allergies.join(', ') : null}</div> */}
				</section>

				<section className="checkboxList">
					<div className='title'>Seafood</div>
					{seafoodList.map((x, i) => <label key={i}>
						<label class="container">
							<input
								type="checkbox"
								name="lang"
								value={x.value}
								onChange={handleSeafood}
							/> {x.label}
							<span class="checkmark"></span>
						</label>
					</label>)}
					{/* <div>Selected allergies: {diets.length ? diets.join(', ') : null}</div> */}
				</section>

				<section className="checkboxList">
					<div className='title'>Refrigerator basics</div>
					{refrigeratorList.map((x, i) => <label key={i}>
						<label class="container">
							<input
								type="checkbox"
								name="lang"
								value={x.value}
								onChange={handleRefrigerator}
							/> {x.label}
							<span class="checkmark"></span>
						</label>
					</label>)}
					{/* <div>Selected allergies: {diets.length ? diets.join(', ') : null}</div> */}
				</section>
			</section>

			<section className="check">
				<section className="checkboxList">
					<div className='title'>Meat</div>
					{produceList.map((x, i) => <label key={i}>
						<label class="container">
							<input
								type="checkbox"
								name="lang"
								value={x.value}
								onChange={handleProduce}
							/> {x.label}
							<span class="checkmark"></span>
						</label>
					</label>)}
					{/* <div>Selected allergies: {allergies.length ? allergies.join(', ') : null}</div> */}
				</section>

				<section className="checkboxList">
					<div className='title'>Baking products</div>
					{seafoodList.map((x, i) => <label key={i}>
						<label class="container">
							<input
								type="checkbox"
								name="lang"
								value={x.value}
								onChange={handleSeafood}
							/> {x.label}
							<span class="checkmark"></span>
						</label>
					</label>)}
					{/* <div>Selected allergies: {diets.length ? diets.join(', ') : null}</div> */}
				</section>

				<section className="checkboxList">
					<div className='title'>Grains</div>
					{refrigeratorList.map((x, i) => <label key={i}>
						<label class="container">
							<input
								type="checkbox"
								name="lang"
								value={x.value}
								onChange={handleRefrigerator}
							/> {x.label}
							<span class="checkmark"></span>
						</label>
					</label>)}
					{/* <div>Selected allergies: {diets.length ? diets.join(', ') : null}</div> */}
				</section>
			</section>


			<body id="about">
				<Link to="/secondlist">
					<div className="button-container">
						<input type="submit" value="Continue" />
					</div>
				</Link>
			</body>


		</div>

	);
}

export default ContactUs;