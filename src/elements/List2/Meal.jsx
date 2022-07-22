import React, { useState, useEffect } from "react";
import "./second.css";

const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [health, setHealth] = useState("");
  const [likes, setLikes] = useState("");
  const [words, setWords] = useState([]);

  useEffect(() => {
    // api key options:
    // josh's main one: 23139cc3494244e986af3e4ec60c0d9b
    // josh's second one: 33830428e8b942879208b29576ba70f2
    // josh's third one: e71a6645ead9406db9c032e6c88d075f
    // josh's fourth one: 47b6002fbdb348c8b25754ba38c9c154
    // ananay's: 2a3e8df87d004d47a39d47f64a5ce0d8
    // remember to update api key on "SecondList" and "Meal"
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=33830428e8b942879208b29576ba70f2&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
        setPrice(data.pricePerServing);
        setHealth(data.healthScore);
        setLikes(data.aggregateLikes);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  // collapsible function
  function modifyImageSize(props) {
    var mealBlock = document.getElementById(props);
    if (mealBlock !== null) {
      // initial click: makes image smaller
      if (mealBlock.style.height === "650px") {
        mealBlock.style.height = "100px";
        mealBlock.style.transition = "height 0.5s ease";
      }
      // next click: makes image larger
      else {
        mealBlock.style.height = "650px";
        mealBlock.style.transition = "height 0.5s ease";
      }
    }
  }


  function handleCart(props) {
    console.log("HANDLE CART:")
    var current = document.getElementById(props);
    // each meal has a 'words' state, so the item 'words' was getting
    // reset everytime since const 'words' was empty everytime
    // need to assign the const 'words' to item 'words' before
    // adding or removing
    var mainArray = JSON.parse(sessionStorage.getItem('words'));
    setWords(mainArray);
    if (current !== null) {
      if (current.innerText === "Add") {
        console.log("added")
        current.innerText = "Remove";
        setWords(myArray => [...myArray, current.value]);
      }
      else {
        console.log("removed")
        current.innerText = "Add";
        setWords(myArray => myArray.filter(word => word !== current.value));
      }
    }
    sessionStorage.setItem('words', JSON.stringify(words));
  }

  // ensures item is stored/set
  useEffect(() => {
    // need to set item value here otherwise cart is one step behind
    sessionStorage.setItem('words', JSON.stringify(words));
    console.log("IN MEAL EFFECT");
    console.log("current array");
    console.log(JSON.parse(sessionStorage.getItem('words')));
  }, [{words}])

  return (
    // article = meal block
    // article is now collapsible
    <article id={meal.title}>
      <h1 onClick={() => modifyImageSize(meal.title)}>{meal.title}</h1>
      <ul className="details">
        <img src={imageUrl} alt="recipe" />
        <ul className="description">
          <li>ID: {meal.id}</li>
          <li>Price: ${price}</li>
          <li>Health score: {health} </li>
          <li>Aggregate score: {likes}</li>
        </ul>
      </ul>

      <section className="row">
        <a href={meal.sourceUrl}>Go to Recipe</a>
        <button id={meal.id} value={meal.title} onClick={() => handleCart(meal.id)}>Add</button>
      </section>
    </article>
  );

}
export default Meal;
const wtv = JSON.parse(sessionStorage.getItem('words'));
export {wtv}