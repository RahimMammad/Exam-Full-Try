import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <nav>
        <div className="navbar-main-container">
            <h2>Floral Studio</h2>
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/add"}>Add</Link>
                <Link to={"/basket"}>Basket</Link>
                <Link to={"/wishlist"}>Wishlist</Link>
                <Link>Contact</Link>
            </ul>
            <FaBars onClick={handleToggleMenu} />
        </div>
        <nav id='sidebar' style={{top: isOpen ? "85px" : "-350px"}}>
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/add"}>Add</Link>
                <Link to={"/basket"}>Basket</Link>
                <Link to={"/wishlist"}>Wishlist</Link>
                <Link>Contact</Link>
                <FaBars onClick={handleToggleMenu} />
            </ul>
        </nav>
    </nav>
  )
}

export default Header