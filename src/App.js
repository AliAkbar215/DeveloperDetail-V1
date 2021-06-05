import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AddUser } from "./Users/users/AddUser";
import { EditUser } from "./Users/users/EditUser";
import React from "react";
import { DeveloperList } from "./Users/users/DeveloperList";
import './App.css'
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-dev">
            <AddUser />
          </Route>
          <Route path="/edit-dev">
            <EditUser />
          </Route>
          <Route path="/">
            <DeveloperList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
