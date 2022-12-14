import React from 'react';
import logo from '../icons/opensea_logo.svg';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <a href="#" className="navbar__logo">
            <img src={logo} alt="openseas-logo" className='navbar__logo-img'/>
            <span>OpenSea</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar__search">
                <span><i className="fa fa-magnifying-glass"></i></span>
                <input type="search" className='navbar__search-input' placeholder='Search items, collections, and accounts' />
            </div>
            <div className="navbar__list">
                <ul>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Stats</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Create</a></li>
                </ul>
                <div>
                    <a href="#"><i className="fa-regular fa-circle-user"></i></a>
                    <a href="#"><i className="fa fa-wallet"></i></a>
                    <a href="#"><i className="fa fa-cart-shopping"></i></a>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
