import React, {useState, useContext, useEffect} from "react";
import { MyContext } from "../App";
import { useLocation } from "react-router-dom";
import siteArray from "../items/array";
import "../styles/product.css";

export default function Product() {
    let {cart, setCart, favourite, setFavourite} = useContext(MyContext)
    let location = useLocation()
    let item = siteArray.find((pdt) => pdt.id === location.state.id)
    let [isFav, setIsFav] = useState(false)

    useEffect(() => {
        let getFav = favourite.find((pro) => pro.id === item.id)
        if(getFav === undefined) {
            setIsFav(false)
        } else {
            setIsFav(true)
        }
    }, [favourite, item.id])

    function addtocart(id) {
        let item = siteArray.find(item => item.id === id)
        let add = cart.filter((pdt) => pdt.id === item.id)
        if(add.length === 0) {
            setCart(prev => [...prev, item])
        }
    }

    function addtofavourite(id) {
        let item = siteArray.find(item => item.id === id)
        let isit = favourite.find((item) => item.id === id)
        if(isit === undefined) {
            setFavourite(prev => [...prev, item])
        } else {
            let newFav = favourite.filter((item) => item.id !== id)
            setFavourite(newFav)
        }
    }

    return (
        <div className="productDiv">
            <div className="product-img">
                <img src={item.image} alt="product" />
            </div>
            <div className="product-details">
                <div className="product-head">
                    <p id="pro-h">{item.name}</p>
                    <p id="pro-p">{item.pieces}, Priceg</p>
                </div>
                <div className="product-pf">
                    <div className="pro-price">
                        <p>Price: ${item.price}</p>
                    </div>
                    <div className="pro-fav">
                        <button onClick={() => addtofavourite(item.id)} style={isFav ? {backgroundColor: "#53B175", color: "white"} : {backgroundColor: "white", color: "#53B175"}}>Fav</button>
                    </div>
                </div>
                <div className="product-cart">
                    <button onClick={() => addtocart(item.id)}>cart</button>
                </div>
            </div>
        </div>
    );
};