import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./checkbox.css";
 
const allergiesList = [
  { value: "milk", label: "Milk" },
  { value: "soy", label: "Soy" },
  { value: "eggs", label: "Eggs" },
  { value: "wheat", label: "Wheat" },
  { value: "treenuts", label: "Treenuts" },
  { value: "fish", label: "Fish" },
  { value: "shellfish", label: "Shellfish" }
];

const dietList = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "pescetarian", label: "Pescetarian" },
  { value: "paleo", label: "Paleo" }
  // { value: "treenuts", label: "Treenuts" },
  // { value: "fish", label: "Fish" },
  // { value: "shellfish", label: "Shellfish" }
];
 
function Check() {
 
  const [allergies, setAllergies] = useState([]);
  const [diets, setDiets] = useState([]);
 
  const handleAllergies = e => {
    const { value, checked } = e.target;
    if (checked) {
      // push selected value in list
      setAllergies(prev => [...prev, value]);
    } else {
      // remove unchecked value from the list
      setAllergies(prev => prev.filter(x => x !== value));
    }
  }

  const handleDiets = e => {
    const { value, checked } = e.target;
    if (checked) {
      // push selected value in list
      setDiets(prev => [...prev, value]);
    } else {
      // remove unchecked value from the list
      setDiets(prev => prev.filter(x => x !== value));
    }
  }
 
  return (
    <div className="page">
      <section className = "phrase">
        <text className="third"> Third, </text>
        <text className="endPhrase"> specify your allergies and dietary restrictions.</text>
      </section>
      
		 <body id = "about">
		 	<Link to="/contactus">
		 		<div className="button-container">
		 			<input type="submit" value="Continue" />
		 		</div>
		 	</Link>
		 </body>

      <section className = "check">
        <section className="checkboxList">
          <div className='title'>Allergies</div>
          {allergiesList.map((x, i) => <label key={i}>
            <label class="container">
              <input
                type="checkbox"
                name="lang"
                value={x.value}
                onChange={handleAllergies}
              /> {x.label}
              <span class="checkmark"></span>
            </label>
          </label>)}
          {/* <div>Selected allergies: {allergies.length ? allergies.join(', ') : null}</div> */}
        </section>

        <section className="checkboxList">
          <div className='title'>Diets</div>
          {dietList.map((x, i) => <label key={i}>
            <label class="container">
              <input
                type="checkbox"
                name="lang"
                value={x.value}
                onChange={handleDiets}
              /> {x.label}
              <span class="checkmark"></span>
            </label>
          </label>)}
          {/* <div>Selected allergies: {diets.length ? diets.join(', ') : null}</div> */}
        </section>
      </section>

    </div>
      
  );
}
 
export default Check;