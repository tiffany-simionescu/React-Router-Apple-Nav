import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/" component={Apple} />
      <Route path="/mac" component={Mac} />
      <Route path="/ipad" component={IPad} />
      <Route path="/iphone" component={IPhone} />
      <Route path="/watch" component={Watch} />
      <Route path="/tv" component={Tv} />
      <Route path="/music" component={Music} />
      <Route path="/support" component={Support} />
      <Route path="/search-bar" component={SearchBar} />
      <Route path="/shopping-cart" component={ShoppingCart} />
    </div>
  );
}

export default App;
