import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './assets/css/styles.css';
import Home from "./components/home/Home"
import About from "./components/about/About";
import ContactMe from "./components/contact/ContactMe"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contactme" component={ContactMe} />
      </div>  
    </Router>
     
    
  );
}

export default App;

