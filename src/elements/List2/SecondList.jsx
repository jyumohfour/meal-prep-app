import React, { useState } from "react";
import MealList from "./MealList";
import "./second.css";

// temporary bool variable:
// basically, page will continue to render => keeps fetching
// use this to stop it from fetching over and over again
var pageLoaded = false;
function SecondList() {
  const [mealData, setMealData] = useState(null);


  const origLink = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=9b6b788926b9411fa6efee53289091c0'
  const queryOne = JSON.parse(sessionStorage.getItem('usedIngredients'));
  console.log(queryOne);
  var stringOne = "includeIngredients=";
  const queryTwo = JSON.parse(sessionStorage.getItem('diets'));
  console.log(queryTwo);
  var stringTwo = "diet=";
  const queryThree = JSON.parse(sessionStorage.getItem('intolerances'));
  console.log(queryThree);
  var stringThree = "intolerances=";

  var finalLink = "";

  for (let i = 0; i < queryOne.length; i++) {
    stringOne += i < queryOne.length - 1 ? queryOne[i] + "," : queryOne[i]
  }

  for (let i = 0; i < queryTwo.length; i++) {
    stringTwo += i < queryTwo.length - 1 ? queryTwo[i] + "," : queryTwo[i]
  }

  for (let i = 0; i < queryThree.length; i++) {
    stringThree += i < queryThree.length - 1 ? queryThree[i] + "," : queryThree[i]
  }

  if (queryOne.length === 0) {
    if (queryTwo.length === 0 && queryThree.length === 0) {
      finalLink = origLink;
    }
    else if (queryTwo.length === 0) {
      finalLink = origLink + "&" + stringThree;
    }
    else if (queryThree.length === 0) {
      finalLink = origLink + "&" + stringTwo;
    }
    else {
      finalLink = origLink + "&" + stringTwo + "&" + stringThree;
    }
  }
  else if (queryTwo.length === 0) {
    finalLink = origLink + "&" + stringOne;
    if (queryThree.length !== 0) {
      finalLink += "&" + stringThree;
    }
  }
  else if (queryThree.length === 0) {
    finalLink = origLink + "&" + stringOne + "&" + stringTwo;
  }
  else {
    finalLink = origLink + "&" + stringOne + "&" + stringTwo + "&" + stringThree;
  }

  sessionStorage.setItem('bigLink', finalLink);
  console.log(sessionStorage.getItem('bigLink'));

  if(!pageLoaded) {
    pageLoaded = true;
    fetch(
      sessionStorage.getItem('bigLink')
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(sessionStorage.getItem('bigLink'));
        console.log(data);
        setMealData(data);
        console.log("YOO ONLY ONCE!")
      })
      .catch(() => {
        console.log("error");
      });
  }

  

  // function getMealData() {
  //   // api key options:
  //   // josh's main one: 23139cc3494244e986af3e4ec60c0d9b
  //   // ananay's: 2a3e8df87d004d47a39d47f64a5ce0d8
  //   // josh's second one: 33830428e8b942879208b29576ba70f2
  //   // random dude's: 9b6b788926b9411fa6efee53289091c0
  //   // remember to update api key on "SecondList" and "Meal"
  //   fetch(
  //     sessionStorage.getItem('bigLink')
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(sessionStorage.getItem('bigLink'));
  //       console.log(data);
  //       setMealData(data);
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });
  // }

  return (
    <div className="App">
      <body id = "second-page">
        {/* <section className="controls">
          <button onClick={getMealData}>Get Daily Meal Plan</button>
        </section> */}
        {mealData && <MealList mealData={mealData} />}
      </body>
    </div>
  );
}

export default SecondList;
