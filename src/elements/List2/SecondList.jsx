import React, { useState } from "react";
import MealList from "./MealList";
import "./second.css";

function SecondList() {
  const [mealData, setMealData] = useState(null);

  function getMealData() {
    // api key options:
    // josh's main one: 23139cc3494244e986af3e4ec60c0d9b
    // ananay's: 2a3e8df87d004d47a39d47f64a5ce0d8
    // josh's second one: 33830428e8b942879208b29576ba70f2
    // random dude's: 9b6b788926b9411fa6efee53289091c0
    // remember to update api key on "SecondList" and "Meal"
    fetch(
      sessionStorage.getItem('bigLink')
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
