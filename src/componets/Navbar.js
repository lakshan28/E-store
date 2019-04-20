import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import logo from '../logo.svg';


export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand"/>
      
      </Link>
  
      </nav>
    )
  }
}
