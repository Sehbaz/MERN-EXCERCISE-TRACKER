import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar-component";
import ExcerciseList from "./components/excercise-list-component";
import EditExcercise from "./components/edit-excercise-component";
import CreateExcercise from "./components/create-excercise-component";
import CreateUser from "./components/create-user-component";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={ExcerciseList} />
        <Route path="/edit/:id" exact component={EditExcercise} />
        <Route path="/create" exact component={CreateExcercise} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
