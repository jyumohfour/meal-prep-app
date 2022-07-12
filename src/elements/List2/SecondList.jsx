import React, { useState } from "react";
import MealList from "./MealList";
import "./second.css";

function SecondList() {
  const [mealData, setMealData] = useState(null);

  const usedIngredients = JSON.parse(sessionStorage.getItem('usedIngredients'));
  var ingred = "usedIngredients=";
  const diets = JSON.parse(sessionStorage.getItem('diets'));
  var diet = "diet=";
  const intolerances = JSON.parse(sessionStorage.getItem('intolerances'));
  var intol = "intolerances=";

  for (let i = 0; i < usedIngredients.length; i++) {
    ingred += i < usedIngredients.length - 1 ? usedIngredients[i] + "," : usedIngredients[i]
  }

  for (let i = 0; i < diets.length; i++) {
    diet += i < diets.length - 1 ? diets[i] + "," : diets[i]
  }

  for (let i = 0; i < intolerances.length; i++) {
    intol += i < intolerances.length - 1 ? intolerances[i] + "," : intolerances[i]
  }

  function getMealData() {
    // api key options:
    // josh's main one: 23139cc3494244e986af3e4ec60c0d9b
    // ananay's: 2a3e8df87d004d47a39d47f64a5ce0d8
    // josh's second one: 33830428e8b942879208b29576ba70f2
    // random dude's: 9b6b788926b9411fa6efee53289091c0
    // remember to update api key on "SecondList" and "Meal"
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=23139cc3494244e986af3e4ec60c0d9b&${ingred}&${diet}&${intol}`
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=cb1c464d94f142c08b156c5beddade8b&number=3&includeIngredients=${ingredients}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(`https://api.spoonacular.com/recipes/complexSearch?apiKey=23139cc3494244e986af3e4ec60c0d9b&${ingred}&${diet}&${intol}`);
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="App">
      <body id = "second-page">
        <section className="controls">
          <button onClick={getMealData}>Get Daily Meal Plan</button>
        </section>
        {mealData && <MealList mealData={mealData} />}
      </body>
    </div>
  );
}

export default SecondList;
