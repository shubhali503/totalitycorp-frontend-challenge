import React from 'react'
import logoWhite from '../icons/opensea-white.svg'

function FooterListItem({itemName}) {
   return <li className='footer__list-item'><a href="#">{itemName}</a></li>
}

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
              <a href="#" className="social__links-link" key={icon}><i className={icon}></i></a>
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
              <FooterListItem itemName={"All NFTs"}/>
              <FooterListItem itemName={"Solana NFTs"}/>
              <FooterListItem itemName={"Art"}/>
              <FooterListItem itemName={"Collectibles"}/>
              <FooterListItem itemName={"Domain Names"}/>
              <FooterListItem itemName={"Music"}/>
              <FooterListItem itemName={"Photography"}/>
              <FooterListItem itemName={"Sports"}/>
              <FooterListItem itemName={"Trading Cards"}/>
              <FooterListItem itemName={"Utility"}/>
              <FooterListItem itemName={"Virtual Worlds"}/>
            </ul>
          </div>

          <div className="footer__middle-column">
          <h3 className='footer__middle-column--header'>My Account</h3>
          <ul className='footer__list'>
            <FooterListItem itemName={"Profile"}/>
            <FooterListItem itemName={"Favorites"}/>
            <FooterListItem itemName={"Watchlist"}/>
            <FooterListItem itemName={"My Collections"}/>
            <FooterListItem itemName={"Settings"}/>
          </ul>
          <h3 className='footer__middle-column--header'>Stats</h3>
          <ul className='footer__list'>
            <FooterListItem itemName={"Rankings"}/>
            <FooterListItem itemName={"Activity"}/>
          </ul>
          </div>

          <div className="footer__middle-column">
          <h3 className='footer__middle-column--header'>Resources</h3>
            <ul className='footer__list'>
              <FooterListItem itemName={"Learn"}/>
              <FooterListItem itemName={"Help Center"}/>
              <FooterListItem itemName={"Platform Status"}/>
              <FooterListItem itemName={"Partners"}/>
              <FooterListItem itemName={"Taxes"}/>
              <FooterListItem itemName={"Blog"}/>
              <FooterListItem itemName={"Docs"}/>
              <FooterListItem itemName={"Newsletter"}/>
            </ul>
          </div>

          <div className="footer__middle-column">
          <h3 className='footer__middle-column--header'>Company</h3>
          <ul className='footer__list'>
            <FooterListItem itemName={"About"}/>
            <FooterListItem itemName={"Careers"}/>
            <FooterListItem itemName={"Ventures"}/>
            <FooterListItem itemName={"Grants"}/>
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
