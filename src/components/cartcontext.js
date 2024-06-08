import React, { useState, createContext } from "react";

export const CartContext = createContext(null)

export default function CartContextProvider(props) {
    let [cartItems, setCartItems] = useState([])

    return (
        <div className="editcart">
            <CartContext.Provider value={{cartItems, setCartItems}}>
                {props.children}
            </CartContext.Provider>
        </div>
    )
}