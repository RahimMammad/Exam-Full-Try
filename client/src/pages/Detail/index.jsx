import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./index.scss"
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const Detail = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState({})
  const {addToBasket} = useContext(BasketContext)
  const {addToWishlist} = useContext(WishlistContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/${id}`)
      setProductData(response.data)
    }
    fetchData()
  }, [])
  return (
    <div>
        <Helmet><title>Detail</title></Helmet>    
            <div className='detail'>
              <div className="image">
                <img src={productData.image} alt="" />
              </div>
              <div className="detail-text">
                <h2>{productData.name}</h2>
                <span>${productData.price}.00</span>
                <div className='add-to'>
                  <button onClick={() => addToBasket(productData)}>Add To Basket</button>
                  <button onClick={() => addToWishlist(productData)}>Add To Wishlist</button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Detail