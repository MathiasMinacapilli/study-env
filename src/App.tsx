import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import Navbar from "./shared/components/navbar/navbar";

// Pages
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
