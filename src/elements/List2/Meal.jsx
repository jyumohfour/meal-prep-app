import React, { useState, useEffect } from "react";
import './second.css';

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [health, setHealth] = useState("");
  const [likes, setLikes] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=9b6b788926b9411fa6efee53289091c0&includeNutrition=false`
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
        <img src={imageUrl} alt="recipe" />
          <ul className="instructions">
            <li>ID: {meal.id}</li>
            <li>Price: {price}</li>
            <li>Health score: {health} </li>
            <li>Aggregate score: {likes}</li>
          </ul>
      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}
