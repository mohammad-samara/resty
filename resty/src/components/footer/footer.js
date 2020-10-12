import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  render() {
  return ( 
    <div className="footer">
        <p>
        &copy; 2020 CodeFollow
        </p>
    </div>
    )
  }
  
}
//better be a function since nothing is passed to it
//const Footer = () => <footer> <div className="footer"> <p> &copy; 2020 </p> </div> </footer>;


export default Footer;