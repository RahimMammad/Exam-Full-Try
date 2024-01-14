import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaRegEye } from 'react-icons/fa'
import axios from 'axios'
import "./index.scss"

const Detail = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState({})

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
                  <button>Add To Basket</button>
                  <button>Add To Wishlist</button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Detail