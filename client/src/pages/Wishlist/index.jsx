import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import "./index.scss"
import { WishlistContext } from '../../context/WishlistContext'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const {favs, removeFromWishlist} = useContext(WishlistContext)
  return (
    <div style={{minHeight: "52vh"}}>
        <Helmet><title>Wishlist</title></Helmet>
        {
          favs.length === 0 ? 
            <h1>Wishlist is Empty <Link to={"/"}>Continue here</Link></h1> :
            <table>        
                <tbody>
                    {
                        favs && favs.map((item) => {
                          return (
                            <tr key={item._id}>
                              <td style={{width: "150px", height: "150px"}}><img src={item.image} alt="" /></td>
                              <td>{item.name}</td>
                              <td>{item.price}</td>
                              <td style={{width: "150px", height: "150px"}}><button onClick={() => removeFromWishlist(item._id)}>Delete</button></td>
                            </tr>
                          )
                        })             
                    }
                </tbody>
            </table>
        }
      
    </div>
  )
}

export default Wishlist