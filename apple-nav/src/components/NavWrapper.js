// Will be the navigation header

import React from 'react';
import {Home, Mac, IPad, IPhone, 
        Watch, Tv, Music, Support, 
        SearchBar, ShoppingCart} from './SubNav.js';
import {Route} from 'react-router-dom';

export default function NavWrapper(props) {
  return (
    <div className="nav-wrapper">
      <Route exact path="/" component={Home} />
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