import React, { useState } from "react";
import MealList from "./MealList";
import "./second.css";

function SecondList() {
  const [mealData, setMealData] = useState(null);
  const [ingredients, setIngredients] = useState("");

  function getMealData() {
    // api key options:
    // josh's main one: 23139cc3494244e986af3e4ec60c0d9b
    // josh's second one: 33830428e8b942879208b29576ba70f2
    // random dude's: 9b6b788926b9411fa6efee53289091c0
    // remember to update api key on "SecondList" and "Meal"
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=23139cc3494244e986af3e4ec60c0d9b&timeFrame=day&diet=${ingredients}`
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=cb1c464d94f142c08b156c5beddade8b&number=3&includeIngredients=${ingredients}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setIngredients(e.target.value);
  }

  return (
    <div className="App">
      <body id = "second-page">
        <section className="controls">
          <input
            type="string"
            placeholder="Food type (e.g. vegan, cheese, pizza)"
            onChange={handleChange}
          />
          <button onClick={getMealData}>Get Daily Meal Plan</button>
        </section>
        {mealData && <MealList mealData={mealData} />}
      </body>
    </div>
  );
}

export default SecondList;
