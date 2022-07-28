import React, {useEffect} from "react";
import Meal from "./Meal";
import "./second.css"
import cartImg from "../images/cart.png";
import {CartContext} from './SecondList';


export default function MealList({ mealData }) {
  return (
    <main>
      <button className="cart">
      {/* <button className="cart" onClick={() => handleCart()} > */}
        {/* <img src={cartImg} style={{ height: "45px", width: "45px", padding: "13px"}} /> */}
        <CartContext.Consumer>
          {({ local }) => <text>{local}</text>}
        </CartContext.Consumer>
      </button>
      <section className="meals">
        {/* use '.results' since that is the name of the array containing the meals
                in meal planner, the array containing the meals was called 'meals', so that's why that worked
                but '.meals' didn't work here */}
        {mealData.results.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}