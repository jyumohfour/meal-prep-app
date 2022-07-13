import React, {useState, useEffect} from 'react' 


const List = () => {

  // const origLink = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=23139cc3494244e986af3e4ec60c0d9b'
  // const queryOne= JSON.parse(sessionStorage.getItem('usedIngredients'));
  // console.log(queryOne);
  // var stringOne = "usedIngredients=";
  // const queryTwo = JSON.parse(sessionStorage.getItem('diets'));
  // console.log(queryTwo);
  // var stringTwo = "diet=";
  // const queryThree = JSON.parse(sessionStorage.getItem('intolerances'));
  // console.log(queryThree);
  // var stringThree = "intolerances=";

  // var finalLink = "";

  // for(let i = 0; i < queryOne.length; i++) {
  //   stringOne+= i < queryOne.length-1 ? queryOne[i] + "," : queryOne[i]
  // }

  // for (let i = 0; i < queryTwo.length; i++) {
  //   stringTwo += i < queryTwo.length - 1 ? queryTwo[i] + "," : queryTwo[i]
  // }

  // for (let i = 0; i < queryThree.length; i++) {
  //   stringThree += i < queryThree.length - 1 ? queryThree[i] + "," : queryThree[i]
  // }

  // if(queryOne.length === 0) {
  //   if(queryTwo.length === 0 && queryThree.length === 0) {
  //     finalLink = origLink;
  //   }
  //   else if(queryTwo.length === 0) {
  //     finalLink = origLink + "&" + stringThree;
  //   }
  //   else if(queryThree.length === 0) {
  //     finalLink = origLink + "&" + stringTwo;
  //   }
  //   else {
  //     finalLink = origLink + "&" + stringTwo + "&" + stringThree;
  //   }
  // }
  // else if(queryTwo.length === 0) {
  //   finalLink = origLink + "&" + stringOne;
  //   if(queryThree.length !== 0 ) {
  //     finalLink += "&" + stringThree;
  //   }
  // }
  // else if(queryThree.length === 0) {
  //   finalLink = origLink + "&" + stringOne + "&" + stringTwo;
  // }
  // else {
  //   finalLink = origLink + "&" + stringOne + "&" + stringTwo + "&" + stringThree;
  // }

  // sessionStorage.setItem('bigLink', finalLink);

  // return (

  //   <div>
  //     {finalLink}
  //   </div>
  // )
}
 export default List