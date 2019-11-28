import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import FlightList from "./components/FlightList";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => <Navbar />} />
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/flightlist" render={() => <FlightList />} />
      </Router>
    </div>
  );
}

export default App;
