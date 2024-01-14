import { createContext, useState } from "react";
import Swal from "sweetalert2"

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [favs, setFavs] = useState(
        localStorage.getItem("Wishlist") ? JSON.parse(localStorage.getItem("Wishlist")) : []
    )

    localStorage.setItem("Wishlist", JSON.stringify(favs))

    const addToWishlist = (item) => {
        const findedFavourite = favs.find((x) => x._id === item._id)
        if(!findedFavourite) {
            setFavs([...favs, item])
            Swal.fire({
                title: "Success",
                text: "Your product added to favourites",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Oops",
                text: "Your product already in favourites",
                icon: "warning"
            });
        }
    }

    const removeFromWishlist = (id) => {
        setFavs(favs.filter(item => item._id !== id))
        Swal.fire({
            title: "Success",
            text: "Your product added to favourites",
            icon: "success"
        });
    }

    const data = {favs, setFavs, addToWishlist, removeFromWishlist}

    return (
        <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
    )
}

export default WishlistProvider