import React from 'react'
import "./index.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div>
        <h3>Devoted to wonderful beauty</h3>
        <h1>Flowers Pricing</h1>
        <div className="team-main-container">
            <div className='team-member'>
                <div className='image'>
                    <div className='social-media'>
                        <FaFacebookF style={{color: "green"}} />
                        <FaTwitter style={{color: "green"}} />
                        <FaInstagramSquare style={{color: "green"}} />
                    </div>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                </div>
                <h2>Velva Kopf</h2>
                <p>Biologist</p>
            </div>
            <div className='team-member'>
                <div className='image'>
                    <div className='social-media'>
                        <FaFacebookF style={{color: "green"}} />
                        <FaTwitter style={{color: "green"}} />
                        <FaInstagramSquare style={{color: "green"}} />
                    </div>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                </div>
                <h2>Velva Kopf</h2>
                <p>Biologist</p>
            </div>
            <div className='team-member'>
                <div className='image'>
                    <div className='social-media'>
                        <FaFacebookF style={{color: "green"}} />
                        <FaTwitter style={{color: "green"}} />
                        <FaInstagramSquare style={{color: "green"}} />
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