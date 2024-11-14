import React from 'react';
import './Navbar.css'
const Navbar = () => {
return (
 

    
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="/a">About</a></li>
        <li><a href="/c">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>

   

 

)

}
export default Navbar;