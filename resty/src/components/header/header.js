import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

class Header extends React.Component {
  render() {
  return ( 
    <div className="header">
        <h1>RESTy</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <p className="link">Home</p>
              </Link>
            </li>
            <li>
              <NavLink to="/history">
                <p className="link">History</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/help">
                <p className="link">help</p>
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>
    )
  }
  
}

//better be a function since nothing is passed to it
//const Header = () =><header><h1>RESTY</h1></header>;
export default Header;