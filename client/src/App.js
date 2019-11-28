import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import FlightList from "./components/FlightList";
import HotelsList from "./components/HotelsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => <Navbar />} />
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/flightlist" render={() => <FlightList />} />
        <Route exact path="/hotellist" render={() => <HotelsList />} />
      </Router>
    </div>
  );
}

export default App;
