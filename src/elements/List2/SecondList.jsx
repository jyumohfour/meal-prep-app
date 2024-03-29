import React, { useState, useEffect} from "react";
import MealList from "./MealList";
import { Link } from "react-router-dom";
import "./second.css";

export const CartContext = React.createContext();

function SecondList() {
  const [mealData, setMealData] = useState(null);
  const [cart, setCart] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [budget, setBudget] = useState(sessionStorage.getItem('budget'));


  function funkyThing(props) {
    setCart(props.label === 'Add' ? prev => [...prev, props.title] : prev => prev.filter(x => x !== props.title));
    // budget and cost are converted to strings here for some reason
    // use local constant values to convert them to floats for calculation
    const convBudget = parseFloat(budget);
    const convCost = parseFloat(props.cost)
    setBudget(props.label === 'Add' ? (convBudget - convCost).toFixed(2) : (convBudget + convCost).toFixed(2));
  }

  // acts as replacement for class state
  let props = {
    cart: cart,
    budget: budget,
    toggleLocal: funkyThing
  }

  useEffect(() => {
    console.log("in use effect")
    console.log(cart);
    sessionStorage.setItem('dababy', JSON.stringify(cart));
    console.log(budget);
  }, [cart])


  // api key options:
  // josh's main one: 23139cc3494244e986af3e4ec60c0d9b
  // josh's second one: 33830428e8b942879208b29576ba70f2
  // josh's third one: e71a6645ead9406db9c032e6c88d075f
  // josh's fourth one: 47b6002fbdb348c8b25754ba38c9c154
  // ananay's: 2a3e8df87d004d47a39d47f64a5ce0d8
  // remember to update api key on "SecondList" and "Meal"
  const origLink = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=e71a6645ead9406db9c032e6c88d075f'
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

  // fetches data based on changes to items in dependency
  // here, item = finalLink, created then modified = two changes
  // fetches data twice
  useEffect(() => {
    fetch(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=33830428e8b942879208b29576ba70f2&number=10'
      // sessionStorage.getItem('bigLink')
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMealData(data);
        console.log("ONLY ONCEEEEE PLEASEEE!");
      })
      .catch(() => {
        console.log("error");
      });
  }, [isLoaded])


  return (
    <div className="App">
      <section className="phrase">
        <text className="first"> Finally, </text>
        <text className="endPhrase"> pick a few recipes </text>
      </section>
      <body id = "second-page">
        {mealData && <CartContext.Provider value = {props}>
            <MealList mealData={mealData}/>
          </CartContext.Provider>}
      </body>
      {/* next page buton */}
        <Link to="/Results">
            <button className="nextPage">Continue</button>
        </Link>
    </div>
  );
}

export default SecondList;
