import React, {useState, useEffect} from 'react' 
import { Link } from "react-router-dom";
import "./styles.css";
import penguin from "./images/penguin.jpeg";
import cartImg from "./images/cart.png";

const List = () => {
  var cake = "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg";
  const [count, setCount] = useState(0);
  const [words, setWords] = useState([]);

  function handleBoth(props) {
    handleWords(props);
    handleCart(props);
  }

  function handleWords(props) {
    var current = document.getElementById(props);
    if(current !== null) {
      var value = current.value;
      if (current.innerText === "Add") {
        // push selected value in list
        // setWords(prev => [...prev, value]);
        setWords(words.push(value));
      } else{
        // remove unchecked value from the list
        // setWords(prev => prev.filter(x => x !== value));
      }
      console.log(words);
    }
  }

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

  function handleCart(props) {
    var current = document.getElementById(props);
    if(current !== null) {
      if(current.innerText === "Add") {
        current.innerText = "Remove";
        setCount(count+1);
        
      }
      else {
        current.innerText = "Add";
        setCount(count-1);
      }
    }
  }

  return (
      <div className="column" id="list">
        <button className="cart">
          <section className="column">
            <img src={cartImg} style={{height:"45px", width:"55px"}}/>
            <text>{count}</text>
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
            <button id = "balls1" value = "XD" onClick={() => handleBoth("balls1")}>Add</button>
          </section>
        </ul>
        <ul className="cropped" id="mf" >
          <img alt="new" onClick={() => modifyImageSize("mf")} src={cake} />
          <button id="mf1" value="lol this worked" onClick={() => handleBoth("mf1")}>Add</button>
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