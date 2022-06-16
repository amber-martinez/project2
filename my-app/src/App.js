import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import PeopleContainer from './components/PeopleContainer';
import Header from "./components/Header";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
