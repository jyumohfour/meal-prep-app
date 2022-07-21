import React, {useState, useEffect} from 'react' 
import { Link } from "react-router-dom";
import "./styles.css";
import penguin from "./images/penguin.jpeg";
import cartImg from "./images/cart.png";

const List = () => {
  var cake = "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg";
  const [words, setWords] = useState([]);

  useEffect(() => {
    console.log(words);
  }, [words])

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
        setWords(myArray => [...myArray, current.value]);
      }
      else {
        current.innerText = "Add";
        setWords(myArray => myArray.filter(word => word !== current.value));
      }
    }
    sessionStorage.setItem('things', JSON.stringify(words));
  }

  return (
      <div className="column" id="list">
        <button className="cart">
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
            <button id = "balls1" value = "XD" onClick={() => handleCart("balls1")}>Add</button>
          </section>
        </ul>
        <ul className="cropped" id="mf" >
          <img alt="new" onClick={() => modifyImageSize("mf")} src={cake} />
          <button id="mf1" value="lol this worked" onClick={() => handleCart("mf1")}>Add</button>
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