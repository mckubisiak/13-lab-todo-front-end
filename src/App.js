import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import HomePage from "./HomePage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import TodoList from "./TodoList";



export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <section>

            <div><Link to='/'>Home</Link></div>
            <div><Link to='/signup'>Sign Up</Link></div>
            <div><Link to='/login'>Login</Link></div>
            <div><Link to='/todolist'>Todo List</Link></div>

          </section>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />    
            <Route 
              path="/signup" 
              exact
              render={(routerProps) => <SignupPage {...routerProps} />} 
            />    
            <Route 
              path="/login" 
              exact
              render={(routerProps) => <LoginPage {...routerProps} />} 
            />          
            <Route 
              path="/todolist" 
              exact
              render={(routerProps) => <TodoList {...routerProps} />} 
            />          
          </Switch>
        </div>
      </Router>
    );
  }
}

