import React from 'react'
import "./index.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const OurTeam = () => {
  return (
    <div>
        <h3>Devoted to wonderful beauty</h3>
        <h1>Flowers Pricing</h1>
        <div className="team-main-container">
            <div className='team-member'>
                <div className='image'>
                    <div className='social-media'>
                        <Link to={"https://www.facebook.com/"}><FaFacebookF style={{color: "green"}} /></Link>
                        <Link to={"https://twitter.com/"}><FaTwitter style={{color: "green"}} /></Link>
                        <Link to={"https://www.instagram.com/"}><FaInstagramSquare style={{color: "green"}} /></Link>
                    </div>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                </div>
                <h2>Velva Kopf</h2>
                <p>Biologist</p>
            </div>
            <div className='team-member'>
                <div className='image'>
                    <div className='social-media'>
                        <Link to={"https://www.facebook.com/"}><FaFacebookF style={{color: "green"}} /></Link>
                        <Link to={"https://twitter.com/"}><FaTwitter style={{color: "green"}} /></Link>
                        <Link to={"https://www.instagram.com/"}><FaInstagramSquare style={{color: "green"}} /></Link>
                    </div>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                </div>
                <h2>Velva Kopf</h2>
                <p>Biologist</p>
            </div>
            <div className='team-member'>
                <div className='image'>
                    <div className='social-media'>
                        <Link to={"https://www.facebook.com/"}><FaFacebookF style={{color: "green"}} /></Link>
                        <Link to={"https://twitter.com/"}><FaTwitter style={{color: "green"}} /></Link>
                        <Link to={"https://www.instagram.com/"}><FaInstagramSquare style={{color: "green"}} /></Link>
                    </div>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
                </div>
                <h2>Velva Kopf</h2>
                <p>Biologist</p>
            </div>
        </div>
    </div>
  )
}

export default OurTeam