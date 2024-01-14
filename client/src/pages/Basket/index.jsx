import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import "./index.scss"
import { BasketContext } from '../../context/BasketContext'
import { Link } from 'react-router-dom'

const Basket = () => {
  const {basketArr, removeFromCart, modifyCount, subTotal} = useContext(BasketContext)
  return (
    <div style={{minHeight: "52vh"}}>
        <Helmet><title>Basket</title></Helmet>
        {
          basketArr.length === 0 ? 
            <h1>Cart is Empty <Link to={"/"}>Continue here</Link></h1> :
            <table>        
                <tbody>
                    {
                        basketArr && basketArr.map((item) => {
                          return (
                              <tr key={item._id}>
                                <td style={{width: "150px", height: "150px"}}><img src={item.image} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                  <div style={{width: "70px", margin: "0 auto", display: "flex", gap: "5px", alignItems: "center"}}>
                                    <button onClick={() => modifyCount(false, item)} style={{width: "30px", height: "30px", background: "none", color: "#000"}}>-</button>
                                    <span>{item.count}</span>
                                    <button onClick={() => modifyCount(true, item)} style={{width: "30px", height: "30px", background: "none", color: "#000"}}>+</button>
                                  </div>
                                </td>
                                <td style={{width: "150px", height: "150px"}}><button onClick={() => removeFromCart(item._id)}>Delete</button></td>
                              </tr>
                          )
                        })             
                    }
                    <tr>
                      <td>SubTotal: ${subTotal}.00</td>
                    </tr>
                </tbody>
            </table>
        }
    </div>
  )
}

export default Basket