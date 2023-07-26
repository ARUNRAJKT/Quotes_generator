import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function  Navbar() {
  return (
    <div className='navmain'>
       <nav>
       <Link id="link" to="/"> Random Quotes </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Link id="link"  to="/word"> Word Search </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Link id="link"  to="/id"> Id Search </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Link id="link"  to="/pro"> Products </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Link id="link"  to="/profile"> Profile </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       </nav>
    </div>
  );
}

export default Navbar;
