import React, { useContext } from "react";
import siteArray from "../items/array.js";
import { MyContext } from "../App.js";
import "../styles/home.css";
import Logo from "../assets/bg-logo.png";
import Banner from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let {cart, setCart} = useContext(MyContext)
  let navigate = useNavigate();

  function product(id) {
    navigate('/product', {state: {id: id}})
  }

  function addtocart(id) {
    let item = siteArray.find(item => item.id === id)
    let add = cart.filter((pdt) => pdt.id === item.id)
    if(add.length === 0) {
      setCart(prev => [...prev, item])
    }
  }

  return (
    <div className="homeDiv">
      <div className="top-div">
        <img src={Logo} alt="logo" />
      </div>
      <div className="banner-div">
        <img src={Banner} alt="banner" />
      </div>
      <div className="items-div">
        <div className="fruits-div">
          <div className="header-div">
            <p>Fresh Fruits</p>
          </div>
          <div className="items">
            {siteArray.filter(items => items.type === "fruits").map((item) => (
              <div className="item">
                <div className="image" onClick={() => product(item.id)}>
                  <img src={item.image} alt="img" />
                </div>
                <div className="item-detail">
                  <div className="item-name">
                    <p>{item.name}</p>
                  </div>
                  <div className="item-qty">
                    <p>{item.pieces}, Priceg</p>
                  </div>
                  <div className="item-cart">
                    <div className="item-price">
                      <p>${item.price}</p>
                    </div>
                    <div className="cart-btn">
                      <button onClick={() => addtocart(item.id)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="vegetables-div">
          <div className="header-div">
            <p>Organic Vegetables</p>
          </div>
          <div className="items">
            {siteArray.filter(items => items.type === "vegetables").map((item) => (
              <div className="item">
                <div className="image" onClick={() => product(item.id)}>
                  <img src={item.image} alt="img" />
                </div>
                <div className="item-detail">
                  <div className="item-name">
                    <p>{item.name}</p>
                  </div>
                  <div className="item-qty">
                    <p>{item.pieces}, Priceg</p>
                  </div>
                  <div className="item-cart">
                    <div className="item-price">
                      <p>${item.price}</p>
                    </div>
                    <div className="cart-btn">
                      <button onClick={() => addtocart(item.id)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
