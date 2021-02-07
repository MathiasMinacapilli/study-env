import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

// Components
import Navbar from "./shared/components/navbar/navbar";

// Pages
import HomePage from "./pages/home/HomePage";
import PersonalArea from "./pages/personal-area/PersonalArea";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/personal-area" component={PersonalArea} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
