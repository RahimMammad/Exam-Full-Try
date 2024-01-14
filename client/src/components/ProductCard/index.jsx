import React, { useContext, useState } from "react";
import "./index.scss"
import { CiShoppingCart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";

const Card = ({product}) => {
  const {addToWishlist} = useContext(WishlistContext)
  const {addToBasket} = useContext(BasketContext)
  const navigate = useNavigate()

  return (
    <div className="product-card" key={product._id}>
      <div className="image">
        <div className="btns">
          <button onClick={() => addToBasket(product)}><CiShoppingCart /></button>
          <button onClick={() => navigate(`${product._id}`)}><FaRegEye /></button>
          <button onClick={() => addToWishlist(product)}><CiHeart /></button>
        </div>
        <img src={product.image} alt="" />
      </div>
      <h2>{product.name}</h2>
      <span>${product.price}.00</span>
    </div>
  );
};

export default Card;
