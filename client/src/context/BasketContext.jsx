import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const BasketContext = createContext()

const BasketProvider = ({children}) => {
    const [basketArr, setBasketArr] = useState(
        localStorage.getItem("Basket") ? JSON.parse(localStorage.getItem("Basket")) : []
    )

    localStorage.setItem("Basket", JSON.stringify(basketArr))

    let subTotal = 0

    basketArr.map((e) =>subTotal += e.price * e.count)

    const addToBasket = (item) => {
        const existedProduct = basketArr.find((x) => x._id === item._id)
        if(existedProduct) {
            existedProduct.count++
            existedProduct.total = existedProduct.price * existedProduct.count
            setBasketArr([...basketArr])
            Swal.fire({
                title: "Oops",
                text: "Your product already in cart",
                icon: "warning"
            });
            return
        }
        const total = item.price
        setBasketArr([...basketArr, {...item, count: 1, total}])
        Swal.fire({
            title: "Success",
            text: "Your product added to cart",
            icon: "success"
        });
    }

    const modifyCount = (increment, item) => {
        const existedProduct = basketArr.find((x) => x._id === item._id)
        if(existedProduct) {
            if(increment) {
                existedProduct.count++
                existedProduct.total = existedProduct.price * existedProduct.count
                setBasketArr([...basketArr])
            } else if(existedProduct.count === 1) {
                removeFromCart(item._id)
            } else {
                existedProduct.count--
                existedProduct.total = existedProduct.price * existedProduct.count
                setBasketArr([...basketArr])
            }
        }
    }

    const removeFromCart = (id) => {
        setBasketArr(basketArr.filter(item => item._id !== id))
        Swal.fire({
            title: "Success",
            text: "Your product added to cart",
            icon: "success"
        });
    }

    const data = {subTotal, basketArr, setBasketArr, addToBasket, modifyCount, removeFromCart}

    return (
        <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
    )
}

export default BasketProvider