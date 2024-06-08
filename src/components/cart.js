import React, {useContext} from "react";
import { MyContext } from "../App";
import "../styles/cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    let {cart, setCart} = useContext(MyContext)
    let navigate = useNavigate()

    function product(id) {
        navigate('/product', {state: {id: id}})
    }

    let freshCart = cart.slice()

    function incQty(id) {
        let newCart = cart.filter((item) => (
            item.id === id ? (item.quantity += 1) : (item.quantity)
        ))
        setCart(newCart)
    }

    function decQty(id) {
        let newCart = cart.filter((item) => (
            item.id === id ? (item.quantity !== 1 ? (item.quantity -= 1) : (item.quantity)) : (item.quantity)
        ))
        setCart(newCart)
    }

    let totalPrice = 0

    cart.map((item) => (
        totalPrice += item.quantity * item.price
    ));
    
    function updateCart(id) {
        cart.filter((item) => item.id === id ? (item.quantity = 1) : (item.quantity))
        let upcart = cart.filter((item) => item.id !== id)
        setCart(upcart)
    }

    return (
        <div className="cartDiv">
            <div className="header">
                <p>My Cart</p>
            </div>
            <div className="cartitems-div">
                {freshCart.reverse().map((item) => (
                    <div className="cartitem">
                        <div className="cart-img">
                            <img src={item.image} alt="cart" />
                        </div>
                        <div className="cart-details">
                            <div className="item-more" onClick={() => product(item.id)}>
                                <p id="head">{item.name}</p>
                                <p id="piece">{item.pieces}, Priceg</p>
                            </div>
                            <div className="cart-qty">
                                <button onClick={() => decQty(item.id)}>-</button>
                                <span id="qty">{item.quantity}</span>
                                <button onClick={() => incQty(item.id)}>+</button>
                            </div>
                        </div>
                        <div className="cart-cp">
                            <div className="close">
                                <button onClick={() => updateCart(item.id)}>x</button>
                            </div>
                            <div className="price">
                                <p>${item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="checkout-div">
                <p>Total Checkout - ${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    );
};