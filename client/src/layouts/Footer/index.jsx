import React from 'react'
import "./index.scss"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="footer-main-container">
        <div className="footer-left">
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
            <div className='inp-btn'>
              <input type="text" placeholder='Your Email' />
              <button>Send</button>
            </div>
        </div>
        <div className="footer-right">
          <ul>
            <h2>Add</h2>
            <Link to={"/add"}>Add</Link>
            <Link to={"/add"}>Add</Link>
            <Link to={"/add"}>Add</Link>
            <Link to={"/add"}>Add</Link>
          </ul>
          <ul>
            <h2>Basket</h2>
            <Link to={"/basket"}>Basket</Link>
            <Link to={"/basket"}>Basket</Link>
            <Link to={"/basket"}>Basket</Link>
            <Link to={"/basket"}>Basket</Link>
          </ul>
          <ul>
            <h2>Wishlist</h2>
            <Link to={"/wishlist"}>Wishlist</Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer