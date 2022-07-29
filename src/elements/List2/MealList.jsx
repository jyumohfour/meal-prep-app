import React, {useState, useEffect} from "react";
import Meal from "./Meal";
import "./second.css"
import cartImg from "../images/cart.png";
import {CartContext} from './SecondList';


export default function MealList({ mealData }) {


  return (
    <main>
      <section className="mealList">
        <section className="meals">
          {/* use '.results' since that is the name of the array containing the meals
                in meal planner, the array containing the meals was called 'meals', so that's why that worked
                but '.meals' didn't work here */}
          {mealData.results.map((meal) => {
            return <Meal key={meal.id} meal={meal} />;
          })}
        </section>
        <section className="sideStuff">
          <h2>Remaining:</h2>
          <CartContext.Consumer>
            {({budget}) => <text>${budget}</text>}
          </CartContext.Consumer>
          <button className="cart">
            <text>Cart:</text>
            <CartContext.Consumer>
              {({ cart }) => <text>{cart.length}</text>}
            </CartContext.Consumer>
          </button>
        </section>
      </section>
    </main>
  );
}