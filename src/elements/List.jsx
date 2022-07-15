import React, {useState, useEffect} from 'react' 
import { Link } from "react-router-dom";
import "./styles.css";
import penguin from "./images/penguin.jpeg";

const List = () => {
  var cake = "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg";

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

  return (
      <div className="column" id="list">
        <section className="phrase">
          <text className="first"> Finally, </text>
          <text className="endPhrase"> pick a few recipes </text>
        </section>
      
      <li className="imageList">
        <ul className="cropped" id="balls" >
          <img alt="penguin" onClick={() => modifyImageSize("balls")} src={penguin}/>
          <text>WE GOT DAWGS</text>
        </ul>
        <ul className="cropped" id="mf" >
          <img alt="new" onClick={() => modifyImageSize("mf")} src={cake} />
        </ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
        <ul>balls</ul>
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