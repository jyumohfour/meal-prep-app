import React, {useEffect} from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  return (
    <main>
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