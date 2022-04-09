import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/users">Users</Link>
        </nav>
        <Switch>
          <Route path="/users/:id" render={(props) => (<Users greetingsMessage="Good Morning" { ...props } />)} />
          <Route path="/about" component={ About } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
