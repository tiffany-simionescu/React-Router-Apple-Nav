// Will be the navigation header

import React from 'react';

export default function NavWrapper(props) {
  return (
    <div className="nav-wrapper">

      <Link to="/">
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" />
      </Link>

      <Link to="/mac">
        Mac
      </Link>

      <Link to="/ipad">
        iPad
      </Link>

      <Link to="/iphone">
        iPhone
      </Link>

      <Link to="/watch">
        Watch
      </Link>

      <Link to="/tv">
        TV
      </Link>

      <Link to="/music">
        Music
      </Link>

      <Link to="/support">
        Support
      </Link>

      <Link to="/search-bar">
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" />
      </Link>

      <Link to="/shopping-cart">
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" />
      </Link>
    </div>
  );
}