import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './css/styles.css';
import Home from "./components/home/Home"
import About from "./components/about/About";
import ContactMe from "./components/contact/ContactMe";
import Portfolio from "./components/portfolio/Project";
import Header  from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
     <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactMe} />
        <Route exact path="/portfolio" component={Portfolio} />
      <Footer />
    </Router>
  );
}

export default App;

