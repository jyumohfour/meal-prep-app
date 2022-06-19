import "./App.css";

import {
BrowserRouter as Router,
Routes,
Route,
Navigate,
} from "react-router-dom";

import React from 'react';
// import Home element
import Home from "./elements/Home";
// import About element/List2
import About from "./elements/List2/About";
// import ContactUs element
import ContactUs from "./elements/ContactUs";
// imports the secondlist from elements/List2
import SecondList from './elements/List2/SecondList';
// import List from element
import List from "./elements/List";
// imports SeconfLists from element/List2
import SecondLists from "./elements/List2/SecondLists";

import { render } from "@testing-library/react";

import Checkbox from "./elements/Checkbox";
function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Routes>
      {/* This route is for home element
      with exact path "/", in element props
      we passes the imported element*/}
      <Route path="/" element={<Home />} />
        
      {/* This route is for about element
      with exact path "/about", in element
      props we passes the imported element*/}
      <Route path="/about" element={<About />} />
        
      {/* This route is for contactus element
      with exact path "/contactus", in
      element props we passes the imported element*/}
      <Route path="/contactus" element={<ContactUs />} />

      {/*This route is for list element
      with exact path "/list", in
      element props we passes the imported element*/}
      <Route path="/list" element={<List />} />
         <Route path="" element={<SecondLists />} /> 
         <Route path=":postSlug" element={<SecondList />} />
        
      <Route path="/checkbox" element={<Checkbox />} />

      {/* If any route mismatches the upper
      route endpoints then, redirect triggers
      and redirects app to home element with to="/" */}

      <Route path="*" element={<Navigate to ="/" />} />
		</Routes>
	</Router>
	</>
);
}

export default App;

