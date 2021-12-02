import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { uuid } from "uuidv4";
// import api from "../api/contacts";
import "./App.css";
// import Header from "./Header";
// import AddContact from "./AddContact";
// import ContactList from "./ContactList";
// import ContactDetail from "./ContactDetail";
// import EditContact from "./EditContact";
// import Login from "./components/Login";



export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            {/* <Login /> */}
          </Route>
          <Route path="/add">
            {/* <Add /> */}
          </Route>
          <Route path="/edit">
            {/* <Edit /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  return <h2>Home</h2>;
}

function Add() {
  return <h2>About</h2>;
}

function Edit() {
  return <h2>Users</h2>;
};
