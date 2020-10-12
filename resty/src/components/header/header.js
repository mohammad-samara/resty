import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
  return ( 
    <div className="header">
        <h1>RESTy</h1>
    </div>
    )
  }
  
}

//better be a function since nothing is passed to it
//const Header = () =><header><h1>RESTY</h1></header>;
export default Header;