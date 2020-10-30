import React from "react";
import { Switch, Route } from "react-router-dom";

import AllBooks from "../components/AllBooks/AllBooks";
import AllUsers from "../components/AllUsers/AllUsers";
import AddUser from "../components/AddUser/AddUser";
import AddBook from "../components/AddBook/AddBook";
import EditUser from "../components/EditUser/EditUser";

const Router = () => (
  <Switch>
    <Route exact path="/" component={AllBooks} />
    <Route exact path="/users" component={AllUsers} />
    <Route exact path="/add-user" component={AddUser} />
    <Route exact path="/add-book" component={AddBook} />
    <Route exact path="/edit-user/:id" component={(props) => <EditUser {...props} />} />
  </Switch>
)

export default Router;
