import "./App.css";
// importing elements from react-router-dom package
import {
BrowserRouter as Router,
Routes,
Route,
Navigate,
} from "react-router-dom";

// import Home element
import Home from "./elements/Home";
// import About element
import About from "./elements/About";
// import ContactUs element
import ContactUs from "./elements/ContactUs";

import List from "./elements/List";

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
