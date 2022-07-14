import React, {useState, useEffect} from 'react' 
import { Link } from "react-router-dom";
import "./styles.css";
import penguin from "./images/penguin.jpeg";

const List = () => {

  var count = 0;
  function modifyImageSize() {
    var img = document.getElementById("balls");
    if(img !== null) {
      // initial click: makes image smaller
      if(count === 0) {
        img.style.height = "400px";
        img.style.transition = "height 0.5s ease";
        count = 1;
      }
      // next click: makes image larger
      else {
        img.style.width = "500px";
        img.style.height = "100px";
        img.style.transition = "height 0.5s ease";
        count = 0;
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
          <img alt="penguin" onClick={() => modifyImageSize()} src={penguin}/>
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