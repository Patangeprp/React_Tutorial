import React from'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg ">
        <h1 className='logo1'>React Tutorial</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Carousel <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accordion">Accordion</Link>
            </li>
            <div className='searchBar'>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button> */}
            </div>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar;