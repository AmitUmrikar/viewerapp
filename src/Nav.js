import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
  return(
      <nav>
        <ul>
          <Link to="/home">
              <li>Home</li>
          </Link>
          <Link to="/about">
              <li>About</li>
          </Link>
          <Link to="/login">
              <li>Login</li>
          </Link>
          <Link to="/covid">
              <li>Covid</li>
          </Link>
        </ul>
      </nav>
  );
}

export default Nav;