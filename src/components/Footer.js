import React from 'react'
import logoWhite from '../icons/opensea-white.svg'

export default function Footer() {

  const socialIcons = [
    "fa-brands fa-twitter",
    "fa-brands fa-instagram",
    "fa-brands fa-discord",
    "fa-brands fa-reddit-alien",
    "fa-brands fa-youtube",
    "fa-brands fa-tiktok",
    "fa-regular fa-envelope"
  ];

  return (
    <footer className='footer'>

      <div className="footer__top">
        <div className="footer__top-left">
          <h3>Stay in the loop</h3>
          <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
          <form action="">
            <input type="email" placeholder="Your email address"/>
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div className="footer__top-right">
          <h3>Join the community</h3>
          <div className="social__links">
            {socialIcons.map(icon =>
              <a href="#" className="social__links-link"><i className={icon}></i></a>
            )}
          </div>
        </div>
      </div>

      <div className="footer__middle">
        <div className="footer__middle-left">
          <a href="#" className="footer__middle-logo">
            <img src={logoWhite} alt="openseas-logo" />
            <span>OpenSea</span>
          </a>
          <p>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
        </div>
        <div className="footer__middle-right">

          <div className="footer__middle-column">
            <h3 className='footer__middle-column--header'>Marketplace</h3>
            <ul className='footer__list'>
              <li className='footer__list-item'><a href="#">All NFTs</a></li>
              <li className='footer__list-item'><a href="#">Solana NFTs</a></li>
              <li className='footer__list-item'><a href="#">Art</a></li>
              <li className='footer__list-item'><a href="#">Collectibles</a></li>
              <li className='footer__list-item'><a href="#">Domain Names</a></li>
              <li className='footer__list-item'><a href="#">Music</a></li>
              <li className='footer__list-item'><a href="#">Photography</a></li>
              <li className='footer__list-item'><a href="#">Sports</a></li>
              <li className='footer__list-item'><a href="#">Trading Cards</a></li>
              <li className='footer__list-item'><a href="#">Utility</a></li>
              <li className='footer__list-item'><a href="#">Virtual Worlds</a></li>
            </ul>
          </div>

          <div className="footer__middle-column">
          <h3 className='footer__middle-column--header'>My Account</h3>
          <ul className='footer__list'>
            <li className='footer__list-item'><a href="#">Profile</a></li>
            <li className='footer__list-item'><a href="#">Favorites</a></li>
            <li className='footer__list-item'><a href="#">Watchlist</a></li>
            <li className='footer__list-item'><a href="#">My Collections</a></li>
            <li className='footer__list-item'><a href="#">Settings</a></li>
          </ul>
          <h3 className='footer__middle-column--header'>Stats</h3>
          <ul className='footer__list'>
            <li className='footer__list-item'><a href="#">Rankings</a></li>
            <li className='footer__list-item'><a href="#">Activity</a></li>
          </ul>
          </div>

          <div className="footer__middle-column">
          <h3 className='footer__middle-column--header'>Resources</h3>
            <ul className='footer__list'>
              <li className='footer__list-item'><a href="#">Learn</a></li>
              <li className='footer__list-item'><a href="#">Help Center</a></li>
              <li className='footer__list-item'><a href="#">Platform Status</a></li>
              <li className='footer__list-item'><a href="#">Partners</a></li>
              <li className='footer__list-item'><a href="#">Taxes</a></li>
              <li className='footer__list-item'><a href="#">Blog</a></li>
              <li className='footer__list-item'><a href="#">Docs</a></li>
              <li className='footer__list-item'><a href="#">Newsletter</a></li>
            </ul>
          </div>

          <div className="footer__middle-column">
          <h3 className='footer__middle-column--header'>Company</h3>
          <ul className='footer__list'>
            <li className='footer__list-item'><a href="#">About</a></li>
            <li className='footer__list-item'><a href="#">Careers</a></li>
            <li className='footer__list-item'><a href="#">Ventures</a></li>
            <li className='footer__list-item'><a href="#">Grants</a></li>
          </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-section">
          <p>© 2018 - 2022 Ozone Networks, Inc</p>
        </div>
        <div className="footer__bottom-section">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
