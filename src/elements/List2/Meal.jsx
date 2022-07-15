import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [health, setHealth] = useState("");
  const [likes, setLikes] = useState("");

  useEffect(() => {
    // api key options:
    // josh's main one: 23139cc3494244e986af3e4ec60c0d9b
    // josh's second one: 33830428e8b942879208b29576ba70f2
    // josh's third one: e71a6645ead9406db9c032e6c88d075f
    // ananay's: 2a3e8df87d004d47a39d47f64a5ce0d8
    // random dude's: 9b6b788926b9411fa6efee53289091c0
    // remember to update api key on "SecondList" and "Meal"
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=23139cc3494244e986af3e4ec60c0d9b&includeNutrition=false`
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
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <ul className="details">
        <img src={imageUrl} alt="recipe" />
        <ul className="description">
          <li>ID: {meal.id}</li>
          <li>Price: ${price}</li>
          <li>Health score: {health} </li>
          <li>Aggregate score: {likes}</li>
        </ul>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}