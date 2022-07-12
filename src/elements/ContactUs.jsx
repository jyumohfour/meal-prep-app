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
	{ value: "eggplant", label: "Eggplant" },
	{ value: "carrots", label: "Carrots" },
	{ value: "cauliflower", label: "Cauliflower" },
	{ value: "garlic", label: "Garlic" },
	{ value: "lettuce", label: "Lettuce" },
	{ value: "beets", label: "Beets" },
	{ value: "apples", label: "Apples" },
	{ value: "lemons", label: "Lemons" }
];

const seafoodList = [
	{ value: "lobster", label: "Lobster" },
	{ value: "oyster", label: "Oyster" },
	{ value: "mussell", label: "Mussell" },
	{ value: "shrimp", label: "Shrimp" },
	{ value: "salmon", label: "Salmon" },
	{ value: "tuna", label: "Tuna" },
	{ value: "clams", label: "Clams" },
	{ value: "crabs", label: "Crabs" }
];

const refrigeratorList = [
	{ value: "butter", label: "Butter" },
	{ value: "cheese", label: "Cheese" },
	{ value: "eggs", label: "Eggs" },
	{ value: "yogurt", label: "Yogurt" },
	{ value: "tortilla", label: "Tortilla" },
	{ value: "milk", label: "Milk" }
];

const meatList = [
	{ value: "beef", label: "Beef" },
	{ value: "goat", label: "Goat" },
	{ value: "chicken", label: "Chicken" },
	{ value: "pork", label: "Pork" },
	{ value: "lamb", label: "Lamb" },
	{ value: "turkey", label: "Turkey" }
];

const bakingList = [
	{ value: "brown sugar", label: "Brown sugar" },
	{ value: "baking soda", label: "Baking soda" },
	{ value: "baking powder", label: "Baking powder" },
	{ value: "cornstarch", label: "Cornstarch" },
	{ value: "flour", label: "Flour" },
];

const grainsList = [
	{ value: "dried lentils", label: "Dried lentils" },
	{ value: "rice", label: "Rice" },
	{ value: "rolled oats", label: "Rolled oats" },
	{ value: "pasta", label: "Pasta" },
	{ value: "breadcrumbs", label: "Breadcrumbs" },
	{ value: "couscous", label: "Couscous" }
];

function ContactUs() {

	const [produce, setProduce] = useState([]);
	const [seafood, setSeafood] = useState([]);
	const [refrigerator, setRefrigerator] = useState([]);
	const [meat, setMeat] = useState([]);
	const [baking, setBaking] = useState([]);
	const [grains, setGrains] = useState([]);

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

	const handleMeat = e => {
		const { value, checked } = e.target;
		if (checked) {
			// push selected value in list
			setMeat(prev => [...prev, value]);
		} else {
			// remove unchecked value from the list
			setMeat(prev => prev.filter(x => x !== value));
		}
	}

	const handleBaking = e => {
		const { value, checked } = e.target;
		if (checked) {
			// push selected value in list
			setBaking(prev => [...prev, value]);
		} else {
			// remove unchecked value from the list
			setBaking(prev => prev.filter(x => x !== value));
		}
	}

	const handleGrains = e => {
		const { value, checked } = e.target;
		if (checked) {
			// push selected value in list
			setGrains(prev => [...prev, value]);
		} else {
			// remove unchecked value from the list
			setGrains(prev => prev.filter(x => x !== value));
		}
	}

	return (
		<div className="page">
			<section className="phrase">
				<text className="third"> Fourth, </text>
				<text className="endPhrase"> pick a few ingredients you like.</text>
			</section>

			{/* page split into three columns, each column in a row */}
			<body id="smaller">
				<section className="checkboxRow">
					{/* column 1: produce + meat */}
					<section className="checkboxColumn">

						<section className="checkboxItems">
							<section className="column">
								<div className='title'>Produce</div>
								<section className="checkboxRow">
									<section className="checkboxColumn">
										{produceList.slice(0, produceList.length / 2).map((x, i) => <label key={i}>
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
									<section className="checkboxColumn">
										{produceList.slice(produceList.length / 2, produceList.length).map((x, i) => <label key={i}>
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
								</section>
							</section>
						</section>

						<section className="checkboxItems">
							<section className="column">
								<div className='title'>Meat (pause)</div>
								<section className="checkboxRow">
									<section className="checkboxColumn">
										{meatList.slice(0, meatList.length / 2).map((x, i) => <label key={i}>
											<label class="container">
												<input
													type="checkbox"
													name="lang"
													value={x.value}
													onChange={handleMeat}
												/> {x.label}
												<span class="checkmark"></span>
											</label>
										</label>)}
										{/* <div>Selected allergies: {allergies.length ? allergies.join(', ') : null}</div> */}
									</section>
									<section className="checkboxColumn">
										{meatList.slice(meatList.length / 2, meatList.length).map((x, i) => <label key={i}>
											<label class="container">
												<input
													type="checkbox"
													name="lang"
													value={x.value}
													onChange={handleMeat}
												/> {x.label}
												<span class="checkmark"></span>
											</label>
										</label>)}
										{/* <div>Selected allergies: {allergies.length ? allergies.join(', ') : null}</div> */}
									</section>
								</section>
							</section>
						</section>

					</section>

					{/* column 2: seafood + baking products */}
					<section className="checkboxColumn">


						<section className="checkboxItems">
							<section className="column">
								<div className='title'>Seafood</div>
								<section className="checkboxRow">
									<section className="checkboxColumn">
										{seafoodList.slice(0, seafoodList.length / 2).map((x, i) => <label key={i}>
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
									<section className="checkboxColumn">
										{seafoodList.slice(seafoodList.length / 2, seafoodList.length).map((x, i) => <label key={i}>
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
								</section>
							</section>
						</section>



						<section className="checkboxItems">
							<section className="column">
								<div className='title'>Baking products</div>
								<section className="checkboxRow">
									<section className="checkboxColumn">
										{bakingList.slice(0, bakingList.length / 2 + 1).map((x, i) => <label key={i}>
											<label class="container">
												<input
													type="checkbox"
													name="lang"
													value={x.value}
													onChange={handleBaking}
												/> {x.label}
												<span class="checkmark"></span>
											</label>
										</label>)}
										{/* <div>Selected allergies: {diets.length ? diets.join(', ') : null}</div> */}
									</section>
									<section className="checkboxColumn">
										{bakingList.slice(bakingList.length / 2 + 1, bakingList.length).map((x, i) => <label key={i}>
											<label class="container">
												<input
													type="checkbox"
													name="lang"
													value={x.value}
													onChange={handleBaking}
												/> {x.label}
												<span class="checkmark"></span>
											</label>
										</label>)}
										{/* <div>Selected allergies: {diets.length ? diets.join(', ') : null}</div> */}
									</section>
								</section>
							</section>
						</section>

					</section>

					{/* column 3: refrigerator basics + grains */}
					<section className="checkboxColumn">

						<section className="checkboxItems">
							<section className="column">
								<div className='title'>Refrigerator Basics</div>
								<section className="checkboxRow">
									<section className="checkboxColumn">
										{refrigeratorList.slice(0, refrigeratorList.length / 2).map((x, i) => <label key={i}>
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
									<section className="checkboxColumn">
										{refrigeratorList.slice(refrigeratorList.length / 2, refrigeratorList.length).map((x, i) => <label key={i}>
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
							</section>
						</section>


						<section className="checkboxItems">
							<section className="column">
								<div className='title'>Grains</div>
								<section className="checkboxRow">
									<section className="checkboxColumn">
										{grainsList.slice(0, grainsList.length / 2).map((x, i) => <label key={i}>
											<label class="container">
												<input
													type="checkbox"
													name="lang"
													value={x.value}
													onChange={handleGrains}
												/> {x.label}
												<span class="checkmark"></span>
											</label>
										</label>)}
										{/* <div>Selected grains: {grains.length ? grains.join(', ') : null}</div> */}
									</section>
									<section className="checkboxColumn">
										{grainsList.slice(grainsList.length / 2, grainsList.length).map((x, i) => <label key={i}>
											<label class="container">
												<input
													type="checkbox"
													name="lang"
													value={x.value}
													onChange={handleGrains}
												/> {x.label}
												<span class="checkmark"></span>
											</label>
										</label>)}
										{/* <div>Selected allergies: {diets.length ? diets.join(', ') : null}</div> */}
									</section>
								</section>
							</section>
						</section>

					</section>
				</section>
			</body>
			


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