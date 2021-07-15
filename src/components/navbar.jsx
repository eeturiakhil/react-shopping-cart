import React, { Component } from 'react';

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
    console.log('NavBar Rendered')
;    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    Navbar <span className="badge badge-pill alert-secondary">{totalCounters}</span>
                </span>
            </div>
        </nav>
     );
};

// class NavBar extends Component {
//     state = {  }
//     render() { 
//     }
// }
 
export default NavBar;