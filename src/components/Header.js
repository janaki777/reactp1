import React from 'react';
import { Link } from 'react-router-dom';

//inline CSS styles with js_object
const styles={
    backgroundColor:'#475562',
    borderBottom:'0.5px white solid', 
    borderTop:'0.5px white solid'
}


const Header=()=> {

    return (<>

<nav className="navbar navbar-expand-lg" style={ styles }>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item">
            <Link className="nav-link text-white text-uppercase " to="/users">USERS</Link>
      </li>

      <li className="nav-item">
            <Link  className="nav-link text-white text-uppercase " to="/signup"> Registration </Link>
      </li>

      <li className="nav-item">
            <Link  className="nav-link text-white text-uppercase " to="/redux-react"> Redux_React</Link>
      </li>

    </ul>
  </div>
</nav>
            
        </>)

}

export default Header;





/*

 <Link to="/home">HOME</Link> &nbsp;&nbsp;
            <Link to="/about">ABOUT</Link> &nbsp;&nbsp;
            <Link to="/services">SERVICES</Link> &nbsp;&nbsp;
            <Link to="/portfolios">PORTFOLIOS</Link> &nbsp;&nbsp;
            <Link to="/contact">CONTACT</Link> &nbsp;&nbsp;



*/