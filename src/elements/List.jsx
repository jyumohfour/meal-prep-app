import React, {useState, useEffect} from 'react' 
import { Link } from "react-router-dom";
import "./styles.css";
import penguin from "./images/penguin.jpeg";
import cartImg from "./images/cart.png";

const List = () => {
  var cake = "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg";
  const [words, setWords] = useState([]);


  // collapsible function
  function modifyImageSize(props) {
    var img = document.getElementById(props);
    if(img !== null) {
      // initial click: makes image smaller
      if(img.style.height === "600px") {
        img.style.height = "100px";
        img.style.transition = "height 0.5s ease";
      }
      // next click: makes image larger
      else{
        img.style.height = "600px";
        img.style.transition = "height 0.5s ease";
      }
    }
  }

  function handleItem(props) {
    var current = document.getElementById(props);
    if(current !== null) {
      if(current.innerText === "Add") {
        console.log("added")
        current.innerText = "Remove";
        setWords(words.concat(current.value))
        // setWords(myArray => [...myArray, current.value]);
      }
      else {
        console.log("removed")
        current.innerText = "Add";
        setWords(myArray => myArray.filter(word => word !== current.value));
      }
    }
    sessionStorage.setItem('things', JSON.stringify(words));
  }

  // ensures item is stored/set
  useEffect(() => {
    // need to set item value here otherwise cart is one step behind
    sessionStorage.setItem('things', JSON.stringify(words));
    console.log("current array");
    console.log(JSON.parse(sessionStorage.getItem('things')));
    // dependency array must have constant
    // using storage item (i.e. getItem()) only calls it once

  }, [{words}])
 
  // sets cart value
  function handleCart() {
    console.log(JSON.parse(sessionStorage.getItem('things')).length);
  }
  return (
      <div className="column" id="list">
      <button className="cart" onClick={() => handleCart()}>
          <section className="column">
            <img src={cartImg} style={{height:"45px", width:"55px"}}/>
            <text>{words.length}</text>
          </section>
          </button>
        <section className="phrase">
          <text className="first"> Finally, </text>
          <text className="endPhrase"> pick a few recipes </text>
        </section>

       
      
      <li className="imageList">
        <ul className="cropped" id="balls" >
          <img alt="penguin" onClick={() => modifyImageSize("balls")} src={penguin}/>
          <text>WE GOT DAWGS</text>
          <section className="row">
            <a href="google.com">Go to Recipe</a>
            <button id = "balls1" value = "XD" onClick={() => handleItem("balls1")}>Add</button>
          </section>
        </ul>
        <ul className="cropped" id="mf" >
          <img alt="new" onClick={() => modifyImageSize("mf")} src={cake} />
          <button id="mf1" value="lol this worked" onClick={() => handleItem("mf1")}>Add</button>
        </ul>
        <ul>balls</ul>
        <ul>balls</ul>
      </li>
        
      <body id="about">
        <Link to="/">
          <div className="button-container">
            <input type="submit" value="Continue" />
          </div>
        </Link>
      </body>


    </div>

  )
}
 export default List

 const wtv = JSON.parse(sessionStorage.getItem("things"))
 export {wtv}