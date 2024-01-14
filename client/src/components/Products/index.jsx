import React from 'react'
import UseFetchData from '../../hooks/UseFetchData'
import Card from '../ProductCard'
import "./index.scss"

const Products = () => {
    const {data} = UseFetchData()
  return (
    <div>
        <h3>Devoted to wonderful beauty</h3>
        <h1>Flowers Pricing</h1>
        <div className="products-main-container">
            {
                data && data.map((product) => {
                    return (
                        <Card key={product._id} product={product} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products